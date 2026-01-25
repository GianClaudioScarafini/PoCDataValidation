# Proof of concept for Data Validation of a Jason File

this small repo contain a small part of a bigger project. 
the goal is be able to easaly check the the data in a Json file and add what is compliant accordingaly to a confif file. 

the result will be added to a powerBi dashboard to red flag infoamtion that are not complaint. 


```mermaid
sequenceDiagram
    GraphQL->>terminal: this is the jason file
    DataValidationsSets-->terminal:"sent the sets of type validations"
    configfile-->terminal: what are the parameters to check and their validation

    terminal --x .json&csv: add columns of data compliants
    .json&csv <<-->> PowerBi: link

```