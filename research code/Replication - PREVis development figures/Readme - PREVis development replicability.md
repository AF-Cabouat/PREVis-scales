# Phase 2 - Scale development

This folder contains the code related to the development of PREVis --- *see **section 5** in the paper.*

## Subfolders

### ```/Notebooks```
This folder contains numbered notebooks and a detailed readme file to recreate figures 14 to 27 and 29 to 71.

### ```/Data```
This folder contains 8 csv files from which all analyses are run:
- Files ```1.csv``` to ```6.csv``` correspond to collected ratings for stimuli A to F. They are used to perform Exploratory Factor Analysis.
- File ```7.csv``` is the concatenated version of files ```1``` to ```6```. It is used to perform Exploratory Factor Analysis.
- File ```stimulus.csv``` is equivalent to file ```7``` but includes a column indicating the stimuli letter for each participant. It is used to perform Confirmatory Factor Analysis.

This data was extracted from our exploratory study's raw data after pre-processing. If you are interested in reproducing these steps, our OSF repository includes the raw (pseudonimized) data as well as the notebooks with the pre-processing code.