---
colorlinks: true
---

# Phase 3 - Instrument validation

This folder contains all supplemental material related to the validation study of PREVis--- see ***section 6*** in the paper.

## Subfolders
All files are organized in 3 subfolders.

### ```/Stimuli generation files```
In this folder we share content from our validation survey (see ***Section 6.1***, ***Section 6.2***, and ***Appendices P*** and ***R*** in the paper):
    - the ```.js``` and ```.html``` code and libraries used to create our 3 stimuli visualizations and calculate layout metrics: ```stimuli generation code.zip```
    - an ```/output``` subfolder containing **for each node-link diagram:**  a ```.json``` file containing the associated greadability metrics, the intial ```.svg``` generated, the ```.ai``` Adobe Illustrator edited file, and the ```.jpg``` final image (where we changed numbers to letters: 1 to A, 2 to B, and 3 to C).
    - a Python notebook (```compare_greadability.ipynb```) used to combine individual ```.json``` files into a table (```compare_greadability.csv```) for study results analysis.


### ```/Notebooks```
This folder contains numbered notebooks (4 Python Jupyter notebooks and 2 R Markdown notebooks) used for data analyses and generating figures with the data collected in our validation survey (see ***Section 6.3*** and ***Appendix Q*** in the paper), as well as 2 html outputs from R notebooks. A detailed readme file provides instructions for running the notebooks and recreating all files from the ```Results/Data_Analysis``` subfolder.

### ```/Results```
This folder contains data collected in studies we conducted during the development process (pre-test, time estimation pilot, and final exploratory survey), as well as data resulting from analyses and generated figures.

#### Root files in ```/Results```
At the root of this folder is the ```results_cleaned.csv``` file with data collected from our survey on Limesurvey, and corresponding Prolific demographics.
We also add a copy of the ```compare_greadability.csv``` file generated from our stimuli node-link, as the metrics are used in our data analysis.

#### Subfolders in ```/Results``` 
-  ```/Data_Analysis/```: this folder contains all files (tables and figures) generated from notebooks during data analyses (described in ***Section 6.3*** and ***Appendices R*** in the paper).