# Notebooks - Exploratory study data analysis

This folder contains the notebooks used to perform analyses of data collected in the exploratory survey---see ***section 5.4*** and ***5.5***, and ***Appendices F*** to ***N*** in the paper. Running the notebooks will reproduce Appendices figures 14 to 27 and 29 to 71.

# Running notebooks

## Requirements

### R notebooks

R Markdown files can be run with R version 4.3.2 (see CRAN archives: https://cran.rstudio.com/src/base/R-4/) and the R Studio software available on https://posit.co/download/rstudio-desktop/. 
When running the notebooks, Rstudio will attempt to load the following libraries and to install missing libraries:
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

### Python notebooks

You will need Pyhton 3.9+ to run these notebooks along with the following libraries and their dependencies:
- ```pandas``` *version 2.1* ```pip install pandas==2.1``` command, or check https://pandas.pydata.org/docs/getting_started/install.html 
- ```seaborn``` *version 0.13.1* ```pip install seaborn==0.13.1``` https://seaborn.pydata.org/installing.html

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
    - ```generatedData-CFA/reliability/```: this notebook will produce multiple individual files for future processing in Jupyter notebook ```Reproduce4```.

*This notebook uses a variable called ```full_Readability_factors``` to filter the dataset. This variable represents the 4-factors structure described in ***Appendix K*** (see also ***Fig. 28*** in the paper, and corresponding OSF file: ```Phase 2 - Scale development/Manual figures/EFA_loadings-4_factors.pdf``` at [osf.io/wrs8k](https://osf.io/wrs8k))*

*If you are interested in reproducing the table underlying Figure 28, you can do so before running the ```Reproduce2-reliability.Rmd``` notebook. Please refer to Figure 28's caption in Appendix K: it contains instructions on how to proceed based on the OSF repository files at [osf.io/9cg8j](https://osf.io/9cg8j) (```Phase 2 - Scale development``` folder).*

### ```Reproduce3-MG-CFA[Modelx].Rmd``` [Model1, Model_2, Model_3, Model_final]
Multi-Group Confirmatory Factor analysis for each model explored as described in ***Appendix M***. Each notebook uses a different ```this_model``` variable to filter the dataset.

Run the notebooks in the order mentioned above.

- **INPUT file** from ```Data/```:
    - ```data/ratings-stimulus.csv```
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedData-CFA/```: fit indices values csv files
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
    - ```RatingPlots-PREVis``` ***Fig. 30*** to ***Fig. 53*** in the paper: data generated from invidiual PREVis subscales, for each stimulus, with individual items' average ratings and 95% CI.
    - ```RatingPlots-factors``` ***Fig. 29*** and ***Fig. 54*** to ***Fig. 71*** in the paper: plots generated for each item in the 4-factors solution from ***Appendix J***, with the item's and the factor's average ratings and 95% CI, across stimuli.