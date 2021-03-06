##   HRnet app : development Roadmap 
---
###  ▶︎ CONTEXT
---
#### Refactoring of a Javascript codebase with Jquery plugins / local storage, to a React/Redux app:
TASKS: 
 - Convert plugins to React components
 - Convert one of the plugins to a React Library (package)
 - Implement Redux state manager
 - Create UI
 - Implement Unit testing
 - Make performances report for each of the 2 versions

---
###  ▶︎ STACK
---
- Html/Css
- Javascript
- Jquery
- Ajax
- React
- Redux
- CI/CD: Circleci + Heroku
---
###  ▶︎ TOOLS
---
- MirageJs + FakerJs
- LightHouse
- Jest/Testing-library

---
### ▶︎ PROCESS <ins></ins>
---

1. ADAPT AND IMPROVE EXISTING CODE USING EXPRESS TO COMPILE ORIGINAL CODEBASE : CREATION OF:
    - architecture
    - routing
    - services
    - mock api calls using local storage  
<br/><br/>
2. PLANNING OF JQUERY PLUGIN CONVERSION
    - read original codebase for each plugin 
    - identify independant sections that'll be necessary when refactoring to React  
    - understand where reported issues stem from
    - choose one plugin to convert to React library
    - elaborate conversion plan
<br/><br/>
    - plugins:
         - ★ DATATABLES
            - plugin FOR Jquery, codebase available downloading from https://datatables.net/download/
            - purpose : 'Paginate, search and order HTML tables'
            - more info: https://datatables.net/
            - lines of code : > 15 000  - jsdoc: yes (loads)
            - complexity: quite complex due to the many available options (see full list: https://datatables.net/examples/) but presence of jsdocs
            - options currently in use in original hrnet codebase:
            - reported issues from current hrnet implem:
                - slow to load new data after adding new entry
                - due to possible reloading of the whole piece
            - challenge(s):
<br/><br/>
        - ★ DATEPICKER
            - Jquery plugin
            - purpose: 'unobtrusively add a datetimepicker, datepicker or timepicker dropdown to your forms. It's easy to customize options'
            - original code: https://github.com/xdan/datetimepicker/blob/bb372ec424ca4cbdac75d79c7df8368b9bd1a52a/jquery.datetimepicker.js
            - more info: https://xdsoft.net/jqplugins/datetimepicker/
            - lines of code : > 2700  - jsdoc: no / comments: no
            - complexity: quite complex due to the many available options / no jsdoc
            - options currently in use in original hrnet codebase:
            - reported issues from current hrnet implem: can be slow & unresponsive
            - challenge(s) : most options should be reproduced to make refactored component as complete/functional as original
<br/><br/>
        - ★ MODAL
            - Jquery plugin
            - purpose: minimal plugin to handle most common modal needs: displaying an existing DOM element + loading a page with AJAX
            - original code: https://github.com/kylefox/jquery-modal/blob/master/jquery.modal.js
            - more info: https://jquerymodal.com/
            - lines of code : < 250  - jsdoc: no / comments: a few
            - complexity: easy
            - reported issues from current hrnet implem:
                 - impossible to customize style
            - challenge(s): make distinction btw ajax code that should be left as is ≠ rest of jquery code to be refactored
<br/><br/>
        - ★ SELECT MENU ➡️ <ins>Chosen to be converted to React library package</ins>
            - Jquery plugin
            - purpose: 'provides a styleable select element replacement. It will act as a proxy back to the original select element, controlling its state for form submission or serialization'
            - original code: https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js
            - more info: https://api.jqueryui.com/selectmenu/
            - lines of code : < 700  - jsdoc: no / comments: yes
            - complexity: ok
            - reported issues from current hrnet implem: 
                - order of the dropdown options changing unexpectedly
                - load time populating after selecting item
            - challenge(s):
            
<br/><br/>



3. CREATE NEW REACT APP
- Replicate features one by one and with unit testing (testing must be gradual)
    
    <b>■  APP architecture</b> -------------------------------
    - layout elements :
        - header <=> unit test
        - routing <=>  unit test
        - nav ( home / current employees list)  <=>  unit test

    - elements
        - page title

    - pages (containers)
        - create employee page
        - employees list page 

    - features: 
        - form 
            - featured components:
                - form validators (util)
                - input components:
                    - simple input
                    - datepicker:
                    - selectMenu:
                - label component
                - button component
        - modal

        - datatable:
            - UI structure
            -  features:
                - select entries amount
                - search
                - order by
                - pagination

    <br/><br/>
    ■ ----------------------------------------------------------
    <br/><br/>
    1. implement base components as static with unit tests ( see Testing plan priority list ) 
    2. Mock api calls
    3. implement Redux state management
    4. expand unit testing to stateful components


```
+--------------------------------------------------+
|  CREATE EMPLOYEE FORM                            |
+--------------------------------------------------+        +--------------------------------+
|                                                  |        |       REDUX STORE              |
|  LOCAL STATE   form errors/ touched              |        |       ***********              |
|  setState()    form values employee              |        +--------------------------------+
|                modal show/type                   |        |                                |
|                set employee's values             |        |   +------------------------+   |
|                                                  |        |   |                        |   |
|                                                  |    +---+--->   employeeReducer      |   |
| +-----------------------------------------+      |    |   |   |                        |   |
| |GLOBAL STATE    new employee values      +------+----+   |   +------------------------+   |
| +-----------------------------------------+      |    |   |   |                        |   |
|                                                  |    |   |   | -get by id req status  |   |
+--- METHODS---------------------------------------+    |   |   |                        |   |
|                                                  |    |   |   | -put by id req status  |   |
|   handleInputChange() > setState values/touched  |    |   |   |                        |   |
|                                                  |    |   |   |                        |   |
|   handleBlur()        > setState errors          |    |   |   +------------------------+   |
|                                                  |    |   |                                |
|   handleSubmit()      > setState errors/touched  |    |   |   +-------------------------+  |
|                       > dispatch data to store   |    |   |   |                         |  |
|                                                  |    |   |   |       ListReducer       |  |
|                                                  |    |   |   |                         |  |
+--- CHILDREN (controlled components)--------------+    |   |   +-------------------------+  |
|   +------------------+    --+                    |    |   |   |                         |  |
|   | SIMPLE INPUT     <--->  |                    |    |   |   |  -get list req status   |  |
|   +------------------+      |                    |    |   |   |                         |  |
|   | SELECT INPUT     <--->  |                    |    +---+--->  -post new employee req |  |
|   +------------------+      |                    |        |   |                         |  |
|   | DATE INPUT       <--->  +--- events          |        |   |                         |  |
|   +------------------+      |                    |        |   |                         |  |
|   | MODAL cancel     <--->  |                    |        |   |                         |  |
|   +------------------+      |                    |        |   |                         |  |
|   | MODAL success    <--->  |                    |        |   |                         |  |
|   +------------------+     -+                    |        |   |                         |  |
|                                                  |        |   |                         |  |
+--------------------------------------------------+        |   |                         |  |
                                                            |   |                         |  |
+--------------------------------------------------+        |   |                         |  |
|   EMPLOYEES LIST                                 |        |   |                         |  |
+--------------------------------------------------+     +--+---> -list sort/search state |  |
|                                                  |     |  |   |                         |  |
|                 +-----------------------+        |     |  |   | -list pagination state  |  |
|                 | sortBy name/date/...  +--------+-----+  |   |                         |  |
|                 | search                |        |        |   |                         |  |
|                 | active page           |        |        |   |                         |  |
|                 | entries amount        |        |        |   +-------------------------+  |
|                 |                       |        |        |                                |
|                 +-----------------------+        |        |                                |
|                                                  |        |                                |
|                                                  |        +--------------------------------+
+--------------------------------------------------+
```

        
<br/><br/>

4. PLUGIN CONVERSION
- based on created React component: 
    - conversion plan elaboration
    - conversion
    - publish created React lib package as an npm
<br/><br/>

5. MAKE PERFORMANCES REPORTS FOR EACH VERSION (original & refactored) using LightHouse



#### testing plan - priority list guidelines

- High value features
- Edge cases in high value features
- Easy breaking parts
- Basic components testing:
    - user interactions
    - conditional rendering
    - utils / hooks



















