---
id: techhw
title: Setup
---

The core of the technical hardware is a Raspberry Pi with a Navio2 shield. I have used the installation instructions from the manufacturer (Emlid) to connect the Emfünger, the servos and the motor. The power supply is provided by Emlid. All in all the following components were installed:

**Control system:**
1. Navio2
2. Raspberry Pi
3. 9g Servos (5x)
4. Motor: Tunrigy 1400KV
5. ESC: 45a
6. GPS antenna
7. Power module (Navio2)
8. Telemetry
10. 2200mAh Turnigy Lipo
11. receiver Turnigy 9x 
12. channel to SBUS adapter

**FPV:**
1. FPV camera
2. 25mw 5.8gHz transmitter

## Hardware 

### Navio2 and Raspberry Pis
Emlid provides detailed instructions, for cabling and installationd it Navios. I downloaded the latest debian based image for the raspberry pi and wrote it to a SD card with the PI imager. Here are already preinstalled almost all needed packages and tools. Among others Ardupilot and ROS. 
After I modified the `wpa_suplicant.conf` as described in the manual, so that the rpi automatically connects to the wifi, I could connect directly via ssh. Emlid directly added an empty `ssh` file in the image for this, so this didn`t have to be done anymore.

With 
```bash
sudo emlittool ardupilot
```
I could simply configure ardupilot for my setup and start sending telemetry data over UDP by adding my local IP as described in the instructions.

Up to this point neither servos, motor or receiver were connected. 

### Wiring
Here I followed entirely the illustration provided by [Emlid](https://docs.emlid.com/navio2/ardupilot/typical-setup-schemes). 
The arrangement of the servos can also be swapped, because later you have to set the outputs manually anyway. 

![navio2-typical-plane-setup-scheme](/img/navio2-typical-plane-setup-scheme.png) 


#### The tragedy with the telemetry
After I wowohl set up the rpi with the Navio and wired the rest of the hardware (correctly), I downloaded Mission Planner. The connection via UDP established itself directly, but was of course dependent on the wifi and therefore more of a temporary solution. After connecting the telemetry counterpart to my computer, I tried to establish a connection via radio. 
However, I kept getting the error message `No Hearbeat packages recieved`. The telemetry was wired correctly according to the instructions of Emlid and switched on in the configuration file. The red lights, which are supposed to signal the transmission of data, did not blink either, so I looked for the error in the Navio and not in the telemetry itself. 
Plugging the telemetry into a USB port of the rpi and selecting this port for data transfer solved the problem. 

Before I solved the problem, I spent almost a whole day looking for the error. Why ? I suspect that the UART port of my Navio is defective. Since I couldn't just accept that, I of course spent ages looking for the error on my end and (unfortunately) dived deep into the semantics and syntax of serial protocols.  But on the way I made a big mistake: **I enabled the serial port from the RPI**.

:::caution
Never enable the serial port of the PI when the Navio2 board is installed.
:::

Because this leads to undefined behavior.j I think that the communication between rpi and navio2 is disturbed and the image of Emlid, already uses the serial pins. Sometimes the PI doesn't start anymore and also doesn't connect to the w-lan. But sometimes everything works as expected.

### FPV 
Here I reused my old setup from the quadrocopter. The live video transmission is not really necessary, because 25mW will probably not be enough to guarantee a continuous connection to the aircraft when it flies over the waypoints. (Of course always in line of sight). Eventually I will upgrade to the FPV combo vo DJI with its huge range with HD transmission. But as long as I can not guarantee that the duck remains safely in the air I prefer not to risk losing the precious hardware. 

## Software 

