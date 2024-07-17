---
colorlinks: true
---

# Notebooks - Validation study data analysis

This folder contains the notebooks used to perform analyses of data collected in the validation survey---see ***section 6.3*** and ***Appendix Q*** in the paper.

## Files
Notebooks in this folder are numbered following their running order:

- ```1-results data structuring.ipynb```: survey data preprocessing before running analyses, and descriptive reports (randomization, demographics).
    - **INPUT files** in ```Results/``` folder:
        - ```results_cleaned.csv```
        - ```compare_greadability.csv```
    - **OUTPUT files** in ```Results/Data_Analysis/```
- ```2-data analysis.ipynb```: comments counts and PREVis ratings frequencies heatmap plots (this file is not mandatory to run: the outputs were not necessary to validate PREVis and we did not include them in the paper).
    - **INPUT files**:
        - ```Results/results_cleaned.csv``` 
        - ```Results/Data_Analysis/multigroup_ratings.csv```
        - ```Results/Data_Analysis/comments/all_comments.csv```
    - **OUTPUT files** in:
        - ```Results/Data_Analysis/comments```
        - ```Results/Data_Analysis/generatedPlots```
- ```3a-Reliability+MG-CFA.Rmd``` and ```3b-CFA_analysis.ipynb```: reliability and dimensionality analyses (see ***section 6.3*** and ***Appendix Q.2*** in the paper). We used ```knitr``` to produce an html output from the R notebook: ```3a-Reliability+MG-CFA.html```.
    - **INPUT file**:
        - ```Results/Data_Analysis/multigroup_ratings.csv```
    - **OUTPUT files** in:
        - ```Results/Data_Analysis/generatedData-CFA/```
        - ```Results/Data_Analysis/generatedPlots-CFA/```
- ```4-MTMM-matrix.Rmd```: Multi-Trait Multi-Method matrices generation (csv tables and pdf figures). We used ```knitr``` to produce an html output from the R notebook: ```4-MTMM-matrix.html```.
    - **OUTPUT files** in ```Results/Data_Analysis/MTMM_analysis```
- ```5-rating plots.ipynb```: subscales average scores point plots with 95% CI, as PDF files.
    - **OUTPUT files** in ```Results/Data_Analysis/generatedPlots/ratings```

# Running notebooks

## Requirements

### Python code

Pyhton Jupyter notebooks require Pyhton 3+ with the following libraries (and their dependencies):

- ```pandas``` *version 2.0+*
- ```seaborn``` *version 0.13+*

### R code

R Markdown files can be run with the [R Studio](https://posit.co/downloads/) software with the following libraries (and their dependencies):

- ```dplyr```
- ```knitr```
- ```psych```
- ```lavaan```
- ```corrplot```
- ```rmcorr```
- ```RColorBrewer```
- (```misty```) *loaded as part of original functions, but not used as there is no missing data in this survey*
- (```mice```) *loaded as part of original functions, but not used as there is no missing data in this survey*
- (```mifa```) *loaded as part of original functions, but not used as there is no missing data in this survey*

## How to run notebooks

### 1- Prepare folders

To run these notebooks, you will need to download the ```results_cleaned.csv``` and ```compare_greadability.csv``` files from the ```Results/``` folder on OSF, and arrange a local folder structure as shown below:

```
/root_folder

    /Notebooks

        *[all notebooks]*

    /Results

        - results_cleaned.csv
        - compare_greadability.csv
```
### 2- Update R markdown files
Update the ```setup``` cell (first cell) in both ```3a-Reliability+MG-CFA.Rmd``` and ```4-MTMM-matrix.Rmd``` files so as to set the working directory to the absolute path of your ```/root_folder```

### 3- Run individual notebooks
Run notebooks in order (1 to 5): the ```Results/Data_Analysis/``` folder and nested structure will be generated from the code.


<!-- ## Notebooks details

### ```1-results data structuring.ipynb```

**INPUT** from ```Results/``` folder:

- ```results_cleaned.csv```
- ```compare_greadability.csv```

This notebook preprocesses the data to run analyses and produces report tables (randomization, demographics, comments):

- remove unecessary columns
- reverse ratings from the *reserved* item in the Big Five Inventory extraversion subscale
- add greadability metrics from ```compare_greadability.csv```
- produces tables to report distribution of order randomization between stimuli. **OUTPUT** in ```Results/Data_Analysis```:
    - ```stimuli_randomization_report.csv``` (summary version, as reported in ***Appendix Q.1***) and companion ```.tex``` file
    - ```stimuli_randomization_report.csv``` (full version) and companion ```.tex``` file
- for each stimulus and each participant, calculate the PREVis subscales central values (mean, std and median)
- separate each stimulus' answers, changing the data structure: the output table has duplicate lines for each participant x each stimulus (3 lines per participant) + 1 column with the stimulus letter. **OUTPUT** in ```Results/Data_Analysis```:
    - ```full_answers_by_stimuli.csv``` with full survey data
    - ```multigroup_ratings.csv``` with PREVis ratings only for Confirmatory Factor Analysis
- extract comments from optional comment question (one question per stimulus). **OUTPUT** in ```Results/Data_Analysis/comments/```:
    - ```[...]_comments.csv``` [all, A, B, C] comments
- report demographics in a table with counts and frequencies. **OUTPUT** in ```Results/Data_Analysis```:
    - ```all_demographics.csv```



### ```2-data analysis.ipynb```

**INPUT**:
- ```Results/results_cleaned.csv``` 
- ```Results/Data_Analysis/multigroup_ratings.csv```
- ```Results/Data_Analysis/comments/all_comments.csv```

This file is not mandatory to run. It generates counts and frequencies for collected optional comments and plots heatmaps of ratings.

- counts and frequencies for collected optional comments. **OUTPUT** in ```Results/Data_Analysis/comments/```:
    - ```all_comments-counts.csv``` numbers and frequencies of comments for each stimulus
- plots heatmaps with ratings from individual PREVis items for each stimulus. **OUTPUT** in ```Results/Data_Analysis/generatedPlots/```:
    - ```heatmap-[...].csv``` with frequency numbers for [A, B, C] stimuli
    - ```heatmap_no_label-[...].csv``` color-only heatmap for [A, B, C] stimuli

### ```3a-Reliability+MG-CFA.Rmd```

**INPUT**:
- ```Results/Data_Analysis/multigroup_ratings.csv```

**MAIN OUTPUT**: ```Notebooks/3a-Reliability+MG-CFA.html```: the ```knit``` library in RStudio produces an html log output, which allows the reader to go through the analysis without having to run the file.

This file takes the ratings as input and produces data and figures related to Multi-Group Confirmatory Analysis fit metrics, and individual PREVis subscales' reliability analyses.

You need to update the ```setup``` cell (first cell) before running, so as to set the working directory to the absolute path of your ```/root_folder```.

- produces a correlation matrix for the complete dataset
- runs reliability analyses on data using the ```alpha``` and ```omega``` functions from the ```psych``` package. Note that the ```omega``` function also outputs visual representations of bifactor modeling results within the html file. **OUTPUT** in ```Results/Data_Analysis/generatedData-CFA/```
    - ```reliability-subscales.csv``` reliability for each subscale, for each timulus and for the full survey data
    - ```reliability-global-by-stimuli``` (indicative file, not descrbed in the paper) reliability of PREVis as a whole (all rating items included), for each timulus
- runs parallel analysis on data using the ```fa.parallel``` function from the ```psych``` package. **OUTPUT** in ```Results/Data_Analysis/generatedPlots-CFA/```
    - ```ScreePlot-[...].pdf``` [All, A, B, C] scree plots for all data and each individual stimulus. The number of factors to retain can be found in the html output, searching for the following expression: *"the number of factors ="*
- runs Multi-Group Confirmatory Factor Analysis ......................................... -->
