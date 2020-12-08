Touhou 8 Imperishable Night: Extended Trial v0.01
Patch Author: zero318
Credit to ExpHP, Priw, dassdude, and everyone else on ZUNcode who pointed me towards documentation, previously made the documentation, or otherwise humored my millions of questions making this.

Documentation/FAQs/Changelog

This patch is intended to port as many features of the old IN trials as possible to the final version. The two tiered time system is the main idea, but there are a lot of smaller and more subtle differences too. As an added bonus, ECL scripts can now use TIME_THRES_MET = 1 to detect specifically the first time requirement, so other patches could build off of that.

Shot Types:
Reimu:
-Power 3(48) shooter 3/4 damage decreased from 13 to 12
-Power 4(80) shooter 3/4 damage decreased from 12 to 10
-Power 5 (128) shooter 3/4 damage decreased from 11 to 10 and shooter 5/6 damage decreased from 10 to 8
Yukari:
-Power 0(0) shooter 1 damage decreased from 24 to 20
-Power 1(8) shooter 1 damage decreased from 24 to 20
-Power 2(24) shooter 2 damage decreased from 24 to 20
-Power 3(48) shooter 2/3 damage decreased from 19 to 17
-Power 4(80) shooter 3/4 damage decreased from 19 to 17
-Power 5(128) shooter 5 damage decreased from 20 to 15
Marisa:
-Hitbox increased from 2.0f to 2.0999999046325684f
Alice:
-Hitbox increased from 2.0f to 2.0999999046325684f
-Nonfocused straight speed increased from 4.0f to 5.0f
-Nonfocused diagonal speed increased from 2.8284270763397217f to 3.535533905029297f
Sakuya:
-Hitbox increased from 2.0f to 2.0999999046325684f
Remilia:
-Hitbox increased from 2.0f to 2.0999999046325684f
-Nonfocused straight speed decreased from 5.0f to 4.0f
-Nonfocused diagonal speed decreased from 3.535533905029297f to 2.8284270763397217f
-Power 6() shooter 0/5/10/15 shot delay increased from 3 to 5
-Power 7() shooter 2/7/12/17 shot delay increased from 3 to 5
Youmu:
-Power 4(80) shooter 2/4 damage increased from 23 to 28
-Power 5(128) shooter 1/2 damage increased from 20 to 21 and shooter 4/6 damage increased from 23 to 28
Yuyuko:
-Nonfocused straight speed increased from 4.0f to 5.0f
-Nonfocused diagonal speed increased from 2.8284270763397217f to 3.535533905029297f
-Power 3(48) shooter 0/2 damage decreased from 24 to 22 and shooter 1 damage decreased from 30 to 24
-Power 4(80) shooter 0/4 damage decreased from 24 to 22, shooter 1/3 damage decreased from 26 to 22, and shooter 2 damage decreased from 30 to 24
-Power 5(128) shooter 0/4 damage decreased from 24 to 22, shooter 1/3 damage decreased from 26 to 22, and shooter 2 damage decreased from 30 to 24

Time Requirements: (Values for 4a/4b/5 were created by doing some statistical trend junk comparing the final/trial times to extrapolate new trial times then a bit of hand adjustment to try and make the numbers look/feel like what ZUN might've done. This essentially meant dividing the final times by 0.69/0.68/0.72/0.73 depending on the difficulty, rounding to a pretty number, and then making up a first threshold that seemed reasonable.)
Stage 1:
E: 2000 -> 2000/3000
N: 2500 -> 2200/3300
H: 2700 -> 2500/3800
L: 3000 -> 2500/4000
Stage 2:
E: 6500 -> 4500/6500
N: 7200 -> 5000/7200
H: 7200 -> 5400/7400
L: 7200 -> 5500/7500
Stage 3:
E: 7500 -> 5000/7500
N: 8500 -> 6000/8500
H: 8800 -> 6500/8800
L: 8800 -> 6800/9000
Stage 4a:
E: 9999 -> 7000/10000
N: 9999 -> 7500/11000
H: 9999 -> 8800/12000
L: 9999 -> 9500/13000
Stage 4b:
E: 7500 -> 5000/7500
N: 8500 -> 6000/8500
H: 8500 -> 6500/8800
L: 8500 -> 6800/9000
Stage 5:
E: 9999 -> 7000/10000
N: 9999 -> 7500/11000
H: 9999 -> 8800/12000
L: 9999 -> 9500/13000
Extra:
10

Time Advance Results:
+0:30 (Blue) Both time requirements met.
+1:00 (Green) Only the first time requirement met.
+1:30 (Red) Neither time requirement met.
+2:00 (Grey) Used more lives or bombs than the stage permits (listed below)

Stage Lifes/Bombs Allowed: (Values for 4a/4b/5 are just duplicates of stage 3 for now since I'm too dead to test all the different teams to get an idea what's reasonable)
Stage 1: 1/3
Stage 2: 2/6
Stage 3+: 3/8

Rank Values: (Starting/Min/Max)
E: 10/8/16 -> 16/12/20
N: 10/8/16 -> 16/10/32
H: 8/8/12 -> 16/10/32
L: 8/8/12 -> 16/10/32
X: 16/15/16 -> 16/15/16
P: 16/15/16 -> 16/15/16

Internal Changes that Could Cause Incompatibility:
-Packed the time requirement array to be shorts instead of ints so that the second limit values could be crammed in.
-Packed the rank array to be bytes instead of ints because it running into the time array was stupid. (Extra still has a time requirement of 10 because it'd feel wrong to "fix" at this point.)
-*Completely* rewrote "0x43B936 GameManager::__initialize_rank_by_difficulty" and "0x43C35F __advance_time_by_stage" to make them use the new packed arrays and reduce function size.
-Inserted a few janky jumps at 0x436E46 and 0x436F0F to properly render the HUD. These changes shouldn't cause any issues, but need to be remembered. These jump to spots where a massive chunk of "0x43C35F __advance_time_by_stage" used to be before it was rewritten.

Internal Changes that Could be Useful:
-EclIVar TIME_THRES_MET properly outputs a value of 1 when only the first time requirement has been met. This doesn't make any difference with the original ECL files, but could be used by custom ones.
-"0x43C425 GameManager::get_required_time_orbs_2" is a new function to retrieve the second time requirement from the globals struct. It can be called just like "0x421B80 GameManager::get_required_time_orbs".

TODO:
-Auto-bomb mechanic that uses all your bomb stocks when you hit anything. Because yes that actually existed.
-Once the damage value of each bomb has been found, find that same data in the trials and port the value.
-There are at least a few differences in the ECL scripts, particularly Keine's last word. Need to dump these and get them added.
-Dump all the other files from the other trials too to look for differences.
-Figure out WTF is up with Remilia's .sht file so I can write less trash documentation.
-Write less trash documentation.
-Get around to tightening up the code in "0x43C35F __advance_time_by_stage". Currently there're a pair of pointless NOP instructions from when I had to fix a bug and didn't want to reposition a million jumps.
-Proper settings?
-An actual patch repository?
-Sleep?
-Rewrite the patch to use codecaves instead of so many raw binhacks?
-Undoubtedly 10 other things I forgot