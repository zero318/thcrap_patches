#define SetInstr(value) \
(current_instruction = (decltype(current_instruction))(value))

#define IndexInstr(offset) \
SetInstr((intptr_t)current_instruction + (offset))

#define ByteArg(number) \
(((uint8_t*)current_instruction->args)[(number)])

#define OneBitArg(number) \
(ByteArg(number) & 0b1)
#define ThreeBitArg(number) \
(ByteArg(number) & 0b111)

#define ShortArg(number) \
(((int16_t*)current_instruction->args)[(number)])

#define RawArg(number) \
(((EclArg*)current_instruction->args)[(number)])

#define IntArg(number) \
(((int32_t*)current_instruction->args)[(number)])

#define UIntArg(number) \
(((uint32_t*)current_instruction->args)[(number)])

#define FloatArg(number) \
(((float*)current_instruction->args)[(number)])

#define Float2Arg(number) \
(((Float2*)current_instruction->args)[(number)])

#define Float3Arg(number) \
(((Float3*)current_instruction->args)[(number)])

#define StringArg(offset) \
((const char*)(current_instruction->args + (offset)))

#define TypeArg(type, number) \
(((type*)current_instruction->args)[(number)])

struct Supervisor {
    HINSTANCE current_instance;  // 0x0
    IDirect3D8* d3d;  // 0x4
    IDirect3DDevice8* d3d_device;  // 0x8
    unknown_fields(0x8);  // 0xc
    void* __dinput_related_ptr_1;  // 0x14
    unknown_fields(0x2C);  // 0x18
    HWND main_window;  // 0x44
    D3DMATRIX view_matrix;  // 0x48
    D3DMATRIX projection_matrix;  // 0x88
    D3DVIEWPORT8 viewport;  // 0xc8
    D3DPRESENT_PARAMETERS present_params;  // 0xe0
    Config configA;  // 0x118
    Config configB;  // 0x14c
    int __dword_184;  // 0x184
    int __dword_188;  // 0x188
    int __dword_18C;  // 0x18c
    int __dword_190;  // 0x190
    unknown_fields(0x4);  // 0x194
    uint32_t __dword_198;  // 0x198
    int __dword_19C;  // 0x19c
    int __dword_1A0;  // 0x1a0
    int __dword_1A4;  // 0x1a4
    float game_speed;  // 0x1a8
    float slowdown;  // 0x1ac
    MidiManager* midi_manager_ptr;  // 0x1b0
    float __float_1B4;  // 0x1b4
    float __float_1B8;  // 0x1b8
    unknown_fields(0x244);  // 0x1bc
    int __dword_400;  // 0x400
    D3DCAPS8 device_caps;  // 0x404

    // 0x424285
    void thiscall tick_timer(int32_t* current, float* subframe) const asm("{[codecave:SUPERVISOR_tick_timer]}") {
        if (this->slowdown <= 0.99f) {
            if ((*subframe += this->game_speed) < 1.0f) return;
            *subframe -= 1.0f;
        }
        ++*current;
    }
}

struct Timer {
    int32_t previous;
    float subframe;
    int32_t current;

    // 0x41B5AF
    inline int32_t thiscall tick() asm("{[codecave:TIMER_tick]}") {
        this->previous = this->current;
        SUPERVISOR.tick_timer(&this->current, &this->subframe);
        return this->current;
    }

    // This wasn't a function in the original game,
	// but it certainly makes the code simpler.
    forceinline void set_default(int32_t current = 0, int32_t previous = -999) {
        this->current = current;
        this->subframe = 0.0f;
        this->previous = previous;
    }

    // 0x424127
    constexpr Timer* thiscall constructor() asm("{[codecave:TIMER_constructor]}") {
		this->set_default(0, -1);
		return this;
	}

    // 0x424154
    void thiscall increment(int32_t count) asm("{[codecave:TIMER_increment]}");
    
	// 0x4241E5
    void thiscall decrement(int32_t count) asm("{[codecave:TIMER_decrement]}");
};

void thiscall Timer::increment(int32_t count) {
    if (SUPERVISOR.slowdown > 0.99f) {
        this->current += count;
    } else if (count < 0) {
        this->decrement(-count);
    } else {
        int32_t current_temp = this->current;
        this->previous = current_temp;
        float new_subframe = this->subframe + SUPERVISOR.game_speed * count;
        float whole_subframes = __builtin_floorf(new_subframe);
        new_subframe -= whole_subframes;
        current_temp += (int32_t)whole_subframes;
        this->current = current_temp;
        this->subframe = new_subframe;
    }
}

void thiscall Timer::decrement(int32_t count) {
    if (SUPERVISOR.slowdown > 0.99f) {
        this->current -= count;
    } else if (count < 0) {
        this->increment(-count);
    } else {
        int32_t current_temp = this->current;
        this->previous = current_temp;
        float new_subframe = this->subframe - SUPERVISOR.game_speed * count;
        float whole_subframes = __builtin_floorf(new_subframe);
        new_subframe -= whole_subframes;
        current_temp -= (int32_t)whole_subframes;
        this->current = current_temp;
        this->subframe = new_subframe;
    }
}

struct AnmInstruction {
    int16_t time;  // 0x0
    uint8_t opcode;  // 0x2
    uint8_t argsize;  // 0x3
    unsigned char args[];  // 0x4
};

struct AnmVM {
    Float3 rotation;  // 0x0
    Float3 angle_vel;  // 0xc
    union {
        Float2 scale;
        struct {
            float scale_y;  // 0x18
            float scale_x;  // 0x1c
        };
    };
    union {
        Float2 scale_interp_final;
        struct {
            float scale_interp_final_y;  // 0x20
            float scale_interp_final_x;  // 0x24
        };
    };
    Float2 uv_scroll_pos;  // 0x28
    Timer script_time;  // 0x30
    D3DMATRIX __matrix;  // 0x3c
    union {
        D3DCOLOR color;  // 0x7c
        uint8_t color_non_aplha[3];
        vec<uint8_t, 4> color_vec gnu_attr(packed);
    };
    union {
        uint16_t flags;
        struct {
            union {
                uint8_t flags_80;
                struct {
                    uint8_t visible : 1; // 0x0001
                    uint8_t : 1; // 0x0002
                    uint8_t additive_blending : 1; // 0x0004
                    uint8_t : 1; // 0x0008
                    uint8_t : 1; // 0x0010
                    uint8_t position_mode : 1; // 0x0020
                    uint8_t flip_x : 1; // 0x0040
                    uint8_t flip_y : 1; // 0x0080
                };
            };
            union {
                uint8_t flags_81;
                struct {
                    uint8_t anchor_mode : 2; // 0x0100-0x0200
                    uint8_t move_mode : 2; // 0x0400-0x0800
                    uint8_t z_write_disable : 1; // 0x1000
                    uint8_t stop_enable : 1; // 0x2000
                };
            };
        };
    };
    probably_padding_bytes(0x2);
    int16_t alpha_interp_end_time;  // 0x84
    int16_t scale_interp_end_time;  // 0x86
    uint16_t __auto_rotate;  // 0x88
    int16_t pending_interrupt_label;  // 0x8a
    int16_t position_interp_end_time;  // 0x8c
    unknown_fields(0x2);  // 0x8e
    Float3 position;  // 0x90
    union {
        Float2 scale_interp_initial;
        struct {
            float scale_interp_initial_y;  // 0x9c
            float scale_interp_initial_x;  // 0xa0
        };
    };
    Timer scale_interp_timer;  // 0xa4
    int16_t sprite_number;  // 0xb0
    unknown_fields(0x2);  // 0xb2
    int16_t anm_file_index;  // 0xb4
    unknown_fields(0x2);  // 0xb6
    AnmInstruction* beginning_of_script;  // 0xb8
    AnmInstruction* current_instr;  // 0xbc
    AnmLoadedSprite* sprite;  // 0xc0
    union {
        D3DCOLOR alpha_interp_initial;  // 0xc4
        vec<uint8_t, 4> alpha_interp_initial_vec gnu_attr(packed);
    };
    union {
        D3DCOLOR alpha_interp_final;  // 0xc8
        vec<uint8_t, 4> alpha_interp_final_vec gnu_attr(packed);
    };
    Float3 position_interp_initial;  // 0xcc
    Float3 position_interp_final;  // 0xd8
    Float3 __position_2;  // 0xe4
    Timer position_interp_timer;  // 0xf0
    int32_t time_of_last_sprite_set;  // 0xfc
    Timer alpha_interp_timer;  // 0x100
    uint8_t font_width;  // 0x10c
    uint8_t font_height;  // 0x10d
    probably_padding_bytes(0x2);  // 0x10e
	
	// 0x403580
    void thiscall initialize() asm("{[codecave:ANM_VM_initialize]}") {
        this->uv_scroll_pos = (Float2){ 0.0f, 0.0f };
        this->scale_interp_final = (Float2){ 0.0f, 0.0f };
        this->scale = (Float2){ 1.0f, 1.0f };
        this->angle_vel = (Float3){ 0.0f, 0.0f, 0.0f };
        this->rotation = (Float3){ 0.0f, 0.0f, 0.0f };
        this->scale_interp_end_time = 0;
        this->alpha_interp_end_time = 0;
        this->color = PackD3DCOLOR(255, 255, 255, 255);
        D3DMATRIX::set_identity(&this->__matrix);
        this->flags_as_word = 3;
        this->__auto_rotate = 0;
        this->pending_interrupt_label = 0;
        this->position_interp_end_time = 0;
        this->script_time.constructor();
    }
}

struct AnmManager {
    AnmLoadedSprite sprites[0x800];  // 0x0
    AnmVM __mystery_vm;  // 0x1c000
    IDirect3DTexture8* textures[0x108];  // 0x1c110
    void* image_data_array[0x100];  // 0x1c530
    int32_t __maybe_loaded_sprite_count;  // 0x1c930
    AnmInstruction* scripts[0x800];  // 0x1c934
    int32_t sprite_indices[0x800];  // 0x1e934
    AnmEntry* anm_files[0x80];  // 0x20934
    uint32_t anm_file_sprite_index_offsets[0x80];  // 0x20b34
    IDirect3DSurface8* surfaces_a[0x20];  // 0x20d34
    IDirect3DSurface8* surfaces_b[0x20];  // 0x20db4
    D3DXIMAGE_INFO surface_source_info[0x20];  // 0x20e34
    D3DCOLOR current_texture_factor;  // 0x210b4
    IDirect3DTexture8* current_texture;  // 0x210b8
    uint8_t current_blend_mode;  // 0x210bc
    uint8_t current_colorop;  // 0x210bd
    uint8_t current___uhhhhh;  // 0x210be
    uint8_t current_zwrite_disable;  // 0x210bf
    AnmLoadedSprite* current_sprite;  // 0x210c0
    IDirect3DVertexBuffer8* stream_source;  // 0x210c4
    RenderVertex142 __some_vertex_buffer[0x4];  // 0x210c8
    int32_t __wierd_texture_height;  // 0x21128
	
	// 0x432430
    void thiscall set_vm_script(AnmVM* vm, AnmInstruction* script_start) asm("{[codecave:ANM_MANAGER_set_vm_script]}");
	
	// 0x4323A0
    int32_t thiscall set_vm_sprite(AnmVM* vm, int32_t sprite_number) asm("{[codecave:ANM_MANAGER_set_vm_sprite]}") {
        vm->sprite_number = sprite_number;
        AnmLoadedSprite* sprite = &this->sprites[sprite_number];
        vm->sprite = sprite;
        D3DMATRIX::set_identity(&vm->__matrix);
        vec<float, 2> matrix_data = sprite->sprite_size.as_vec / sprite->texture_size.as_vec;
        vm->__matrix.m11 = matrix_data[0];
        vm->__matrix.m00 = matrix_data[1];
        return 0;
	}

    // 0x433960
    int32_t thiscall run_anm(AnmVM* vm) asm("{[codecave:ANM_MANAGER_run_anm]}") {
        AnmInstruction* current_instruction = vm->current_instr;
        if (!current_instruction) {
            return 1;
        }
        uint8_t op_index;
        int32_t current_time;
        int32_t instruction_time;
        if (int32_t pending_interrupt = vm->pending_interrupt_label) {
            vm->pending_interrupt_label = 0;
            vm->stop_enable = false;
            current_instruction = vm->beginning_of_script;
            for (
                AnmInstruction* default_interrupt = NULL;
                ;
                IndexInstr(current_instruction->argsize + sizeof(AnmInstruction))
            ) {
                switch (current_instruction->opcode) {
                    case 22: { // interrupt_label
                        if (IntArg(0) == pending_interrupt) {
                            goto StopInterruptSearch;
                        }
                        else if (IntArg(0) == -1) {
                            default_interrupt = current_instruction;
                        }
                        continue;
                    }
                    case 0: // delete
                    case 15: // static
                        if (default_interrupt == NULL) {
                            vm->script_time.decrement(1);
                            goto BreakInsLoop3;
                        }
                        else {
                            current_instruction = default_interrupt;
                        }
                        goto StopInterruptSearch;
                }
            }
        StopInterruptSearch:
            IndexInstr(current_instruction->argsize + sizeof(AnmInstruction));
            vm->visible = true;
            vm->script_time = (Timer){ -999, 0.0f, instruction_time = current_time = current_instruction->time };
        }
        else {
            current_time = vm->script_time.current;
            instruction_time = current_instruction->time;
        }
        for (
            ;
            instruction_time <= current_time;
            IndexInstr(current_instruction->argsize + sizeof(AnmInstruction)), instruction_time = current_instruction->time
        ) {
        NextInstr:
            switch (op_index = current_instruction->opcode) {
                default:
                    break;
                case 0: // delete
                    vm->visible = false;
                    [[fallthrough]];
                case 15: // static
                    vm->current_instr = NULL;
                    return 1;
                case 1: // sprite
                    vm->visible = true;
                    this->set_vm_sprite(vm, this->sprite_indices[vm->anm_file_index] + IntArg(0));
                    vm->time_of_last_sprite_set = current_time;
                    break;
                case 16: // sprite_rand
                    vm->visible = true;
                    this->set_vm_sprite(vm, RNG.rand_ushort_mod(ShortArg(2)) + this->sprite_indices[vm->anm_file_index] + IntArg(0));
                    vm->time_of_last_sprite_set = current_time;
                    break;
                case 2: { // scale
                    vec<float, 2> temp = Float2Arg(0).as_vec;
                    vm->scale.as_vec[1] = temp[0];
                    vm->scale.as_vec[0] = temp[1];
                    break;
                }
                case 3: // alpha
                    vm->alpha = ByteArg(0);
                    break;
                case 4: // color
                    // color_non_aplha is an array of 3 uint8_t
                    // in a union with the standard D3DCOLOR.
                    // Memcpy is used to let the compiler move
                    // the 3 bytes however it wants without me
                    // needing to give a crap.
                    memcpy(vm->color_non_aplha, current_instruction->args, sizeof(vm->color_non_aplha));
                    break;
                case 5: // jump
                    SetInstr((intptr_t)vm->beginning_of_script + IntArg(0));
                    current_time = current_instruction->time;
                    goto NextInstr;
                case 7: // flip_x
                    vm->flip_x ^= 1;
                    vm->scale_x = -vm->scale_x;
                    break;
                case 25: // position_mode
                    vm->position_mode = OneBitArg(0);
                    break;
                case 8: // flip_y
                    vm->flip_y ^= 1;
                    vm->scale_y = -vm->scale_y;
                    break;
                case 9: // rotate
                    vm->rotation = Float3Arg(0);
                    break;
                case 10: // angular_velocity
                    vm->angle_vel = Float3Arg(0);
                    break;
                case 11: { // scale_growth
                    vec<float, 2> temp = Float2Arg(0).as_vec;
                    vm->scale_interp_final.as_vec[1] = temp[0];
                    vm->scale_interp_final.as_vec[0] = temp[1];
                    vm->scale_interp_end_time = 0;
                    break;
                }
                case 30: { // scale_time_linear
                    vec<float, 2> temp = Float2Arg(0).as_vec;
                    vm->scale_interp_final.as_vec[1] = temp[0];
                    vm->scale_interp_final.as_vec[0] = temp[1];
                    vm->scale_interp_end_time = ShortArg(4);
                    vm->scale_interp_timer.set_default();
                    vm->scale_interp_initial.as_vec = vm->scale.as_vec;
                    break;
                }
                case 12: { // alpha_time_linear
                    D3DCOLOR color = vm->color;
                    vm->alpha_interp_initial = color;
                    vm->alpha_interp_final = (color & 0x00FFFFFF) | (ByteArg(0) << 24);
                    vm->alpha_interp_end_time = ShortArg(2);
                    vm->alpha_interp_timer.set_default();
                    break;
                }
                case 13: // blend_additive
                    vm->additive_blending = true;
                    break;
                case 14: // blend_default
                    vm->additive_blending = false;
                    break;
                case 17: // position
                    (!vm->position_mode ? vm->position : vm->__position_2) = Float3Arg(0);
                    break;
                case 18: // position_time_linear
                case 19: // position_time_quadratic
                case 20: // position_time_quartic
                    vm->move_mode = op_index - 18;
                    vm->position_interp_initial = (!vm->position_mode ? vm->position : vm->__position_2);
                    vm->position_interp_final = Float3Arg(0);
                    vm->position_interp_end_time = IntArg(3);
                    vm->position_interp_timer.set_default();
                    break;
                case 24: // stop_hide
                    vm->visible = false;
                    [[fallthrough]];
                case 21: // stop
                    vm->stop_enable = true;
                    vm->script_time.current = current_time;
                    vm->script_time.decrement(1);
                    goto BreakInsLoop2;
                case 29: // visible
                    vm->visible = OneBitArg(0);
                    break;
                case 23: // anchor_top_left
                    vm->anchor_mode = 3;
                    break;
                case 26: // 
                    vm->__auto_rotate = ShortArg(0);
                    break;
                case 27: { // scroll_now_x
                    float temp = vm->uv_scroll_pos.x + FloatArg(0);
                    if (temp >= 1.0f) temp -= 1.0f;
                    if (temp < 0.0f) temp += 1.0f;
                    vm->uv_scroll_pos.x = temp;
                    break;
                }
                case 28: { // scroll_now_y
                    float temp = vm->uv_scroll_pos.y + FloatArg(0);
                    if (temp >= 1.0f) temp -= 1.0f;
                    if (temp < 0.0f) temp += 1.0f;
                    vm->uv_scroll_pos.y = temp;
                    break;
                }
                case 31: // z_write_disable
                    vm->z_write_disable = OneBitArg(0);
                    break;
            }
        }
    BreakInsLoop1: // Break1 is used when exiting because of instruction time
        vm->script_time.current = current_time;
    BreakInsLoop2: // Break2 is used when exiting from a stop instruction
        vm->current_instr = current_instruction;
    BreakInsLoop3: // Break3 is used when no interrupt can be found
        
		// This mess is just here to replace 3 calls
		// to reduce_angle. The reduction isn't perfect,
		// but it's 100% accurate over at least +-1000.0f.
		// Considering that the original looping code
		// breaks down well before then, good enough.
        vec<double, 4> angles_temp = convertvec(*(unaligned vec<float, 4>*)vm->angle_vel.as_array, vec<double, 4>);
        angles_temp * ONE_OVER_TWO_PI_d;
        vec<double, 4> angles_temp2 = _mm256_round_pd(angles_temp, 0x8);
        angles_temp -= angles_temp2;
        angles_temp *= TWO_PI_d;
        vec<float, 4> angles_temp3 = convertvec(angles_temp, vec<float, 4>);
		
        unaligned vec<float, 4>& rotation_ref = *(unaligned vec<float, 4>*)vm->rotation.as_array;
        angles_temp3 *= SUPERVISOR.game_speed;
        angles_temp3 += rotation_ref;
        rotation_ref[0] = angles_temp3[0]; // This optimizes to BLENDPS
        rotation_ref[1] = angles_temp3[1];
        rotation_ref[2] = angles_temp3[2];
		
		// Scale Interp
        if (int32_t scale_end_time = vm->scale_interp_end_time;
            scale_end_time > 0
        ) {
            vm->scale_interp_timer.tick();
            vec<float, 2> scale;
            if (vm->scale_interp_timer.current >= scale_end_time) {
                scale = vm->scale_interp_final.as_vec;
                vm->scale_interp_end_time = 0;
                vm->scale_interp_final_y = 0.0f;
                vm->scale_interp_final_x = 0.0f;
            }
            else {
                float interp = ((float)vm->scale_interp_timer.current + vm->scale_interp_timer.subframe) / (float)scale_end_time;
                vec<float, 2> scale_initial = vm->scale_interp_initial.as_vec;
                vec<float, 2> scale_final = vm->scale_interp_final.as_vec;
                scale = scale_initial + (scale_final - scale_initial) * interp;
            }
            vm->scale.as_vec[0] = (!vm->flip_y ? scale[0] : -scale[0]);
            vm->scale.as_vec[1] = (!vm->flip_x ? scale[1] : -scale[1]);
        }
        else {
            vm->scale.as_vec += vm->scale_interp_final.as_vec * SUPERVISOR.game_speed;
        }
		
		// Color Interp
        if (int32_t alpha_end_time = vm->alpha_interp_end_time;
            alpha_end_time > 0
        ) {
            vm->alpha_interp_timer.tick();
            if (vm->alpha_interp_timer.current >= alpha_end_time) {
                vm->alpha_interp_end_time = 0;
            }
            float interp = ((float)vm->alpha_interp_timer.current + vm->alpha_interp_timer.subframe) / (float)alpha_end_time;
            interp = __min(interp, 1.0f);
            
            vec<float, 4> interp_initial = convertvec(vm->alpha_interp_initial_vec, vec<float, 4>);
            vec<float, 4> interp_final = convertvec(vm->alpha_interp_final_vec, vec<float, 4>);
            vm->color_vec = convertvec(interp_initial + (interp_final - interp_initial) * interp, vec<uint8_t, 4>);
        }
		
		// Position Interp
        if (int32_t position_end_time = vm->position_interp_end_time) {
            float interp = ((float)vm->position_interp_timer.current + vm->position_interp_timer.subframe) / (float)position_end_time;
            interp = __min(interp, 1.0f);
            switch (vm->flags_81 & 0xC) {
                case 0x4: //case 1:
                    interp = 1.0f - interp;
                    interp *= interp;
                    interp = 1.0f - interp;
                    break;
                case 0x8: //case 2:
                    interp = 1.0f - interp;
                    interp *= interp;
                    interp *= interp;
                    interp = 1.0f - interp;
                    break;
            }

            vec<float, 4> interp_mul = (vec<float, 4>){ interp, interp, interp, interp };
            unaligned vec<float, 4>& position = *(unaligned vec<float, 4>*)(!vm->position_mode ? &vm->position : &vm->__position_2);
            vec<float, 4> position_interp_final = *(unaligned vec<float, 4>*)&vm->position_interp_final;
            vec<float, 4> position_interp_initial = *(unaligned vec<float, 4>*)&vm->position_interp_initial;
            vec<float, 4> temp_position = (interp_mul * position_interp_final) + ((vec<float, 4>) { 1.0f, 1.0f, 1.0f, 1.0f } - interp_mul) * position_interp_initial;
            position[0] = temp_position[0];
            position[1] = temp_position[1];
            position[2] = temp_position[2];

            if (vm->position_interp_timer.current >= position_end_time) {
                vm->position_interp_end_time = 0;
            }
            vm->position_interp_timer.tick();
        }
        vm->script_time.tick();
        return 0;
    }
}

void thiscall AnmManager::set_vm_script(AnmVM* vm, AnmInstruction* script_start) {
    vm->flip_x = false;
    vm->flip_y = false;
    vm->position_mode = 0;
    vm->initialize();
    vm->beginning_of_script = script_start;
    vm->current_instr = script_start;
    vm->script_time.set_default();
    vm->visible = false;
    if (script_start) {
        this->run_anm(vm);
    }
}