# Notebooks - Exploratory study data analysis

This folder contains the notebooks used to perform analyses of data collected in the exploratory survey—see ***Sections 5.4*** and ***5.5***, and ***Appendices F*** to ***N*** in the paper. Running the notebooks will reproduce Appendices Figures 14–27 and 29–71.

# Running notebooks

## Requirements

### Repository

Download the whole repository to a local file, either via `git clone` or by downloading the corresponding zip archive and extracting it to a known location.

### R notebooks

R Markdown files can be run with R version 4.3.2 (see CRAN archives: https://cran.rstudio.com/src/base/R-4/ or, specifically for for Windows, download and install the file `R-4.3.2-win.exe` from https://cran.rstudio.com/bin/windows/base/old/4.3.2) and the R Studio software available on https://posit.co/download/rstudio-desktop/. 
When running the notebooks, Rstudio will attempt to load the following libraries, and to install them if they are missing:
- ```corrplot```
- ```dplyr```
- ```knitr```
- ```lavaan```
- ```mice```
- ```mifa```
- ```misty```
- ```psych```
- ```RColorBrewer```
- ```tibble```

### Python notebooks

You will need Python 3.9+ to run these notebooks with JupyterLab. Install a respective Python environment (e.g., https://www.anaconda.com/download/ or https://www.python.org/downloads/) as well as the requirements in one go by (first, under Windows, installing the [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/), then running the command `vs_buildtools.exe --norestart --passive --downloadThenInstall --includeRecommended --add Microsoft.VisualStudio.Workload.NativeDesktop --add Microsoft.VisualStudio.Workload.VCTools --add Microsoft.VisualStudio.Workload.MSBuildTools` in the same directory where you downloaded the Microsoft C++ Build Tools installer, rebooting, and then) using ```pip install -r requirements.txt``` (using the [`requirements.txt`](/requirements.txt) file in the root of the repository) or use the following commands:
- ```Jupyterlab```: use the ```pip install jupyterlab``` command, or check https://jupyter.org/install
- under Windows, you also need the [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) to be able to install `pandas`
- ```pandas``` *version 2.0*: use the ```pip install pandas==2.0.0``` command, or check https://pandas.pydata.org/docs/getting_started/install.html 
- ```seaborn``` *version 0.13.1*: use the ```pip install seaborn==0.13.1``` command, or check https://seaborn.pydata.org/installing.html

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
