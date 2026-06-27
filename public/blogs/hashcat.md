Understanding Hashcat: The World's Fastest Password Cracker
Harsh Mehta, #OPEN_TO_WORK
Harsh Mehta
GSoC 2026 | Former Intern @Tech Mahindra | Pentathon’25 Finalist


April 12, 2025
What is Hashcat?
Hashcat is an advanced password recovery tool designed to break hashed passwords using the power of CPU or GPU. It supports hundreds of hashing algorithms, including:

MD5
SHA1, SHA512
NTLM
bcrypt
WPA/WPA2 Handshakes
and many more...

It’s open-source, cross-platform (Linux, Windows, macOS), and optimized for both CPU and GPU acceleration (with OpenCL or CUDA support).

🧠 How Hashcat Works
Hashcat uses a concept called "brute force" or "dictionary attacks" to guess what the original password might be from a hash.

🔹 Hashes 101
When you enter a password, websites store a hash — a one-way cryptographic output — instead of the raw password. For example, password123 becomes:

password123 :-
MD5: 482c811da5d5b4bc6d497ffa98491e38
Reversing that hash (i.e., finding a string that produces it) is non-trivial. That's where Hashcat steps in.

🔹 Core Architecture
Hashcat operates using combinatorial cracking, where it combines patterns and rules on-the-fly. Here’s how it technically cracks a hash:

Kernel Compilation: Hashcat compiles optimized kernels for the target hash type on your machine using OpenCL/CUDA.
Hash Parsing: The input hashes are parsed and validated.
Attack Mode Selection: Hashcat supports multiple modes: 

0: Straight (basic wordlist)
3: Brute-force
6/7: Hybrid (dictionary + masks)
1: Combinator (two dictionaries)



4. Password Candidate Generation: Based on selected attack mode.

5. Hashing and Comparison: Each password candidate is hashed using the selected algorithm, and the result is compared to the input hash.

Success? If the generated hash matches the original — bingo! The password is cracked.

This process is accelerated using massive parallelization on GPUs, which allows billions of hash computations per second.

🧾 Wordlists: The Fuel for Cracking
Wordlists are plain text files with millions of potential passwords. They’re essential for dictionary or hybrid attacks.

Common Wordlists:
rockyou.txt (found on Kali)
SecLists (GitHub)
CrackStation (massive collection)

They can be customized, combined, and even mutated using rules (Hashcat’s own syntax for modifying entries).

Example rule: c = capitalize first letter, ! = append ! at the end Rule-based mutation turns hello into Hello!

🛠️ Example Usage
Let’s say we have an MD5 hash:

echo -n "password123" | md5sum
# Output: 482c811da5d5b4bc6d497ffa98491e38
🔓 Crack with rockyou.txt

hashcat -m 0 -a 0 -o found.txt hash.txt /usr/share/wordlists/rockyou.txt
-m 0: MD5
-a 0: Dictionary attack
-o found.txt: Output file
hash.txt: Contains the hash
/usr/share/wordlists/rockyou.txt: Wordlist (For Linux)

🔐 Legal Use
Hashcat should only be used in authorized penetration testing, CTFs, password audits, or your own systems.

⚠️ Never use it on systems you don't own or have explicit permission to test.

Start small, experiment with safe hash cracking, and explore how cryptographic systems are only as strong as the passwords we feed them.



Let me know your thoughts/ feedback. Thanks for reading <3 （￣︶￣）↗ 

Ref: https://hashcat.net/hashcat/