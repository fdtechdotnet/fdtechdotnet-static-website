---
title: Learning Target and Scope Overview
description: Learn the specifics of the learning target and scope in this website about full-stack web application development and delivery with cloud infrastructure.
featuredImage: ../images/fdtechdotnet-learning-target-and-scope.drawio.svg
featuredImageCaption: Learning Target and Scope
date: 2023-08-05T20:51:30.758Z
lastDateUpdated: 2023-08-05T20:53:51.122Z
subcategories: Fullstack-dev Technology
categories: Fullstack-dev Technology
tags:
  - fdtechdotnet
---

## Core Learning Target and Scope

The above figure shows the core learning target and scope of Full-stack Web Application Development and Delivery with Cloud Infrastructure.

Let's familiarize these three with the below details:

### Web Application Development

Web App Development is the process of creating dynamic and interactive software applications accessible through web and mobile browsers. It involves designing, coding, testing, and deploying applications that can run on different devices and platforms connected to the internet.

Web application development encompasses a range of technologies and frameworks and focuses on delivering user-friendly interfaces, efficient data management, and secure communication between the client and server.

This process enables businesses, organizations, and individuals to build powerful and accessible web-based solutions for various purposes, such as e-commerce, social networking, productivity tools, etc.

### DevOps (Development + Operations)

Short for Development and Operations. It is an approach that combines software development and IT operations to streamline the software development lifecycle, which emphasizes collaboration, automation, and continuous delivery, enabling organizations to deliver software applications more efficiently and reliably.

DevOps practices involve close cooperation between development and operations teams, breaking down silos and fostering a culture of shared responsibility. And by integrating development and operations, DevOps aims to improve software quality, accelerate time to market, and enhance overall business agility.

### Cloud Infrastructure

Cloud infrastructure refers to the set of technologies and practices used to deploy and manage applications in the cloud. Cloud infrastructure component includes servers, storage, networking, and architecture patterns such as microservices, serverless, and containers.


## The Big Picture

Full-stack web application development and delivery involve creating and delivering a web application that functions across multiple software stack layers. And to make this web application available to the users, we need to deliver the application into on-premise or cloud infrastructure.

Based on the above figure, here are some details about the learning scope to cover:

### Full-stack Development

It refers to the process of designing, building, and deploying a complete web application that encompasses both the front-end (client-side) and back-end (server-side) components. It include the front-end user interface, the back-end business logic and data management, and everything in between.

The scope of full-stack web application development involves a wide range and options of technologies, frameworks, and tools. And full-stack web application development aims to create a functional and interactive application that users can access and use through a web and mobile browser.

### DevOps Practices

DevOps stands for Development and Operations, which is a set of practices that aims for improvement in collaboration, communication, and integration between software development teams and IT operations teams. It focuses on streamlining the software delivery process and ensuring the rapid and reliable delivery of software products and services.

The scope of DevOps encompasses the entire software development lifecycle, including planning, coding, building, testing, deployment, operation, and monitoring. It emphasizes the need for close collaboration and shared responsibilities between development and operations teams throughout these stages.

These practices include techniques such as Continuous Integration (CI), Continuous Delivery (CD), and Infrastructure-as-Code (IaC), which help to automate the process of building, testing, and deploying software.

![DevOps Practices Scope](../images/fdtechdotnet-devops-practices-scope.drawio.svg)

Let's look back on the above figure and observe the two target scenarios of DevOps implementation:
- (B) Scope: Continous Integration and Delivery (CI/CD) without Infrastructure-as-Code
- (C) Scope: Continous Integration and Delivery (CI/CD) with Infrastructure-as-Code

**(B) Scope** is the target scenario in which the DevOps practices only involve Continuous Integration (CI) and Continuous Delivery (CD). In this scope, the target is to learn and share about implementing CI/CD targeting cloud services for web applications infrastructure.

On the other hand, **(C) Scope** is the target scenario that is almost the same as the (B) Scope. However, this scope is limited to Cloud Service infrastructures and architectures by implementing programmatic infrastructure management with Infrastructure-as-Code (IaC). We can use Azure Resource Management (ARM) templates and Terraform to orchestrate Microsoft Azure cloud services along with the Azure DevOps Server (formerly known as Team Foundation Server or Visual Studio Team System).

### Automation

Let's look again at the figure and see the **(A)** scope intersecting in the Full-stack Development and DevOps Practices area:

![Automation Scope](../images/fdtechdotnet-automation-scope.drawio.svg)

DevOps is the set of practices to achieve seamless automated development and delivery process of software applications. However, automation scope is wider apart from these practices when developing web applications.

Developers can set their development environment to automate repetitive actions, especially if they work with client-side (front-end) applications like automated local builds and resource bundlers; Or an automated process by executing a set of commands with certain Command-Line Interface (CLI).

For example, an automated build and setup of docker instances for local backend service development or automated build for front-end client development whenever stylesheets and scripts were modified.
