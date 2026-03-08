#!/usr/bin/env python3
import random, sys
modifier = int(sys.argv[1]) if len(sys.argv) > 1 else 0
d1, d2 = random.randint(1, 6), random.randint(1, 6)
total = d1 + d2 + modifier
tier = "10+" if total >= 10 else "7-9" if total >= 7 else "6-"
print(f"{d1} + {d2} + ({modifier:+d}) = {total}  [{tier}]")
