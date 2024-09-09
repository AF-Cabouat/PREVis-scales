# Notebooks - Exploratory study data analysis

This folder contains the notebooks used to perform analyses of data collected in the exploratory survey---see ***section 5.4*** and ***5.5***, and ***Appendices F*** to ***N*** in the paper. Running the notebooks will reproduce Appendices figures 14 to 27 and 29 to 71.

# Running notebooks

## Requirements

### R code

R Markdown files can be run with R version 4.3.2 (see CRAN archives: https://cran.rstudio.com/src/base/R-4/) and the R Studio software available on https://posit.co/download/rstudio-desktop/. 
The notebooks will attempt to load the following libraries and their dependencies. It will install missing libraries:
- ```dplyr```
- ```tibble```
- ```knitr```
- ```psych```
- ```lavaan```
- ```corrplot```
- ```RColorBrewer```
- ```misty```
- ```mice```
- ```mifa```

### Python code

Pyhton Jupyter notebooks require you to install Pyhton 3.9+ along with the following libraries and their dependencies:
- ```pandas``` *version 2.0+* https://pandas.pydata.org/docs/getting_started/install.html
- ```seaborn``` *version 0.13+* https://seaborn.pydata.org/installing.html

## Data files
The ```Data``` folder contains 8 csv files from which all analyses are run:
- Files ```1.csv``` to ```6.csv``` correspond to collected ratings for stimuli A to F. They are used to perform Exploratory Factor Analysis.
- File ```7.csv``` is the concatenated version of files ```1``` to ```6```. It is used to perform Exploratory Factor Analysis.
- File ```stimulus.csv``` is equivalent to file ```7``` but includes a column indicating the stimuli letter for each participant. It is used to perform Confirmatory Factor Analysis.

This data was extracted from the study raw data after pre-processing. If you are interested in reproducing these steps, our OSF repository includes the raw (pseudonimized) data as well as the notebooks with the pre-processing code.

## How to run notebooks

Run notebooks in order (1 to 3): the ```Data_Analysis/``` folder and output nested structure will be generated from the code.

### ```Reproduce1-EFA.Rmd```
Exploratory Factor Analyses described in ***section 5.5*** and ***Appendices F*** to ***J*** in the paper. The equivalent notebook was uploaded on OSF as ```3-EFA-+-all.Rmd```
- **INPUT files** from ```Data/```: ```ratings-[...].csv``` [1 to 7]:
    - files numbered ```1---6``` correspond to A---F stimuli ratings (one file per stimulus)
    - file numbered ```7``` corresponds to all collected ratings across stimuli (related to output files labeled ```Agg```)
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedPlots-EFA/```: contains files related to ***Appendix I***.
    - ```generatedData-EFA/```: in particular, the ```Agg/``` subfolder contains the factor loadings tables we used to conduct analyses described in ***Appendix K***. 

### ```Reproduce2-reliability.Rmd```
Reliability analyses described in ***Appendix L***. The equivalent notebook was uploaded on OSF as ```5a-reliability.Rmd```
- **INPUT file** from ```Data/```:
    - ```data/ratings-stimulus.csv```
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedData-CFA/reliability/```

*This notebook uses a variable called ```full_Readability_factors``` to filter the dataset. This variable represents the 4-factors structure described in ***Appendix K*** (see also ***Fig. 28*** in the paper, and corresponding OSF file: ```Phase 2 - Scale development/Manual figures/EFA_loadings-4_factors.pdf``` at [osf.io/wrs8k](https://osf.io/wrs8k))*

*If you are interested in reproducing the table underlying Figure 28, you can do so before running the ```Reproduce2-reliability.Rmd``` notebook. Please refer to Figure 28's caption in Appendix K: it contains instructions on how to proceed based on the OSF repository files at [osf.io/9cg8j](https://osf.io/9cg8j) (```Phase 2 - Scale development``` folder).*

### ```Reproduce3-MG-CFA[Modelx].Rmd``` [Model1, Model_2, Model_3, Model_final]
Multi-Group Confirmatory Factor analysis for each model explored as described in ***Appendix M***. Each notebook uses a different ```this_model``` variable to filter the dataset.

- **INPUT file** from ```Data/```:
    - ```data/ratings-stimulus.csv```
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedData-CFA/```
    - ```generatedPlots-CFA/correlations/```

### ```Reproduce4-reliability-MG-CFA-analysis.ipynb```
Structuring data from ```Reproduce2-reliability.Rmd``` and ```Reproduce3-MG-CFA.Rmd``` (above) notebooks outputs, to facilitate analysis described in ***Appendix N.2*** and generate Tables 20 to 25.
- **INPUT files** from ```Data_Analysis/generatedData-CFA```:
    - ```fit_indices-[...].csv``` [Model1, Model_2, Model_3]
    - ```/reliability/to aggregate/[...][...]-reliability.csv``` [understand, layout, dataFeat, dataRead]x[Model1, Model_2, Model_3, Model_final]. *Note: we built this notebook with 3 models and edited it after selecting the final model to obtain our final instrument's reliability metrics as reported in **Appendix N.3**.*
- **OUTPUT files** in ```Data_Analysis/```:
    - ```CFA/```: fit indices ranking and metrics summary outputs to compare the 3 models' goodness-of-fit performances.
    - ```generatedData-CFA/reliability```: concatenated reliability metrics tables for each model (as well as summary .csv and .tex files for each).

### ```Reproduce5-rating plots.ipynb```
Subscales average scores point plots with 95% CI, as PDF files.
- **INPUT file** from ```Data_Analysis/```:
    - ```data/ratings-stimulus.csv```
    - **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedPlots/ratings-PREVis```: contains ***Fig. 30*** to ***Fig. 47*** in the paper: data generated from invidiual PREVis subscales, for each stimulus, with individual items' average ratings and 95% CI.
    - ```generatedPlots/ratings-factors``` contains ***Fig. 48*** to ***Fig. 65*** in the paper: plots generated for each item in the 4-factors solution from ***Appendix J***, with the item's and the factor's average ratings and 95% CI, across stimuli.

- **OUTPUT files** in ```Data_Analysis/generatedPlots/ratings```