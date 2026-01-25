# Proof of concept for Data Validation of a Jason File

this small repo contain a small part of a bigger project. 
the goal is be able to easaly check the the data in a Json file and add what is compliant accordingaly to a confif file. 

the result will be added to a powerBi dashboard to red flag infoamtion that are not complaint. 


```mermaid
---
title: Animal example
---
classDiagram
    note "From Duck till Zebra"
    Animal <|-- Duck
    note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
        +String beakColor
        +swim()
        +quack()
    }
    class Fish{
        -int sizeInFeet
        -canEat()
    }
    class Zebra{
        +bool is_wild
        +run()
    }

```