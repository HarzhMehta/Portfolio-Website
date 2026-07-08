---
title: "My GSoC Midterm Journey with Liquid Galaxy"
subtitle: "Halfway through Google Summer of Code: building an Agent to control Liquid Galaxy with natural language, voice, SSH automation, and dynamic KML generation."
date: "July 8, 2026"
category: "gsoc"
image: "/assets/GSoC-Vertical.svg"
---

# My GSoC Midterm Journey with Liquid Galaxy


Halfway through Google Summer of Code!

It feels like just yesterday the contributor slots were announced, and now I am already at the midterm mark. It has been an incredible, fast-paced ride working with the team at Liquid Galaxy. TL;DR: time flies.

Before I dive into what I have been building over the last few weeks, let us take a step back and look at what Liquid Galaxy actually is, because it is easily one of the coolest open-source setups you will ever see.

## What on Earth is a Liquid Galaxy?

Imagine standing in front of a massive, immersive wall of screens that wraps around your field of vision. That is a Liquid Galaxy.

![Liquid Galaxy multi-screen rig](/assets/liquid_galaxy_rig.jpg)

Originally started as a Google project, Liquid Galaxy is an open-source panoramic display system. Under the hood, it is a cluster of separate computers working in perfect synchronization. When you look at it, they act as a single, seamless canvas displaying wide views of maps, immersive 3D tours, and complex geographical data.

Think of it like a powerhouse cluster of computers running Google Earth with perfectly synced displays.

## My Project

To make Google Earth visualize custom data, draw shapes, or fly around, you have to use KML, or Keyhole Markup Language, layers. Think of KML like the HTML of maps. It is a script that tells Google Earth exactly where to look, what coordinates to follow, what lines to draw, and how to render 3D structures.

For a non-technical person, writing KML code or managing a cluster of Linux machines is not exactly intuitive. You usually have to know your way around terminal commands, network protocols, and map scripting just to make the screens change view.

That is exactly where my GSoC project comes in.

My goal is to bridge this gap completely using a system I am building using the **Hermes Agent**.

![Hermes Agent preview](/assets/hermesagent.png)

The concept is simple but powerful: we run the agent locally on a Raspberry Pi, which acts as a server-based AI assistant on the same local network, or LAN, as the Liquid Galaxy rig.

By deploying a local instance of a large language model like Gemma, or by using cloud APIs where appropriate, the system gains the exact skills and knowledge needed to control the entire display rig using nothing but natural language or simple voice commands.

## What Is Built So Far

When I first sat down with my mentors to map out the core use cases for the assistant, we realized the project naturally split into two major pillars.

## 1. System Automation via SSH

The first challenge was giving the assistant the ability to manage the hardware infrastructure. If a screen goes out of sync, or if the system needs a hard reset, a user should not have to SSH into multiple nodes manually.

Now, the agent can securely execute cluster-wide commands like:

- relaunch
- reboot
- complete system power off
- clear the KMLs

etc..

These can be triggered natively through natural language.

## 2. Dynamic KML and Cinematic Tour Generation

The second, and arguably most fun, pillar is turning abstract human ideas into immediate visual map layers. Instead of writing lines of geographic coordinates, you can just talk to the agent.

For example, during testing, I gave it a prompt:

> Create a tour of the Himalayan mountain ranges in India, but also create some 3D triangles indicating the peaks of the mountains. Make the 3D triangles blue.

The agent successfully parsed the request, searched the coordinates for peaks like Kanchenjunga and Nanda Devi, generated a raw `himalayas.kml` payload on the fly, and pushed it to the rig.

Within seconds, the Liquid Galaxy initiated a smooth, cinematic flying tour around the Himalayas while rendering custom-extruded blue 3D peaks right on the physical display canvas.

I have also added voice support using TTS and STT with Hermes and its built-in capabilities.

There are deeper changes made such as saving KMLs generated in memory to reuse, optimizing skills and creating a standard arch for a user to be able to make their own use cases and so on ... Maybe i'll write in depth in the 2nd blog after GSoC. 

## What's Next?

Right now, I am shifting focus toward building **OKF**, or Open Knowledge Format, format memories for the agent. This will give the assistant a structured, long-term memory system so it can better retain contextual information about the environment, user preferences, and previous commands.

I am also brainstorming more creative and complex KML use cases, along with interactive asset injections, such as targeting specific grid blocks on a physical layout to inject 3D models.

My mentors and students at Lleida, Spain tested injecting a 3D Pikachu onto a custom map matrix in the lab recently!

## What I Realized

A very detailed, strong, clear, and well-written documentation system is extremely important.

My project is evolving with time as agents like Hermes update and new innovations such as LLM Wiki or OKF come in. Because of that, writing down all the research is very important. Clear communication with mentors is just as important.

A huge thank you to my mentors for the constant guidance and feedback during the first half of the program.

I cannot wait to see the final system fully integrated and running live in the labs by the end of the summer.

Stay tuned for the next update, and also thanks for reading. Hehe.

Here's a cool ASCII art:

<div align="center">
	<img src="/assets/raspscii.gif" alt="Cool ASCII art" style="max-width: 420px; width: 100%; height: auto;" />
</div>

