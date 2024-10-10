# Notebooks - Exploratory study data analysis

This folder contains the notebooks used to perform analyses of data collected in the exploratory survey—see ***Sections 5.4*** and ***5.5*** as well as ***Appendices F–N*** in the paper. Running the notebooks will reproduce Figures 14–27 and 29–71 (in the appendix).

Follow the explanations in this readme file to run the code on your machine.

[1. Requirements:](#requirements) start by setting up the environment.

[2. Prepare to run notebooks:](#how-to-run-notebooks) read on how to run individual notebooks.

[3. Run notebooks in order:](#running-notebooks-in-order) get order to run individual notebooks and expected Input/Output files.

[4. List of generated figures:](#list-of-generated-figures-in-data_analysis-folder) if you want to find a specific figure among the output pdf files.

[5. List of generated table:](#list-of-generated-figures-in-data_analysis-folder) if you want to find a specific data file among the output csv files.


---


# Requirements

>**NOTE:** if you setup these requirements before (such as for the PREVis validation code) you do not have to do it again.

>*These instructions were tested on a clean Windows 10 installation (and with the specific requirements noted below, and specifically [Anaconda Python](https://www.anaconda.com/) for the Python environment). Please note that for the installation of the prerequisites (Anaconda Python) you may need to disable Windows' virus and malware protection—otherwise the installation takes forever (at least in a VirtualBox VM). To do so, open the Windows Settings and then, under "Updates & Security > Windows Security > Virus & threat protection > Virus & threat protection settings > Manage settings" (temporarily) disable "Real-time protection" (but only ever do this in a separate VM, not on your main system).*

## Repository

Download the whole repository to a local file, either via
```
git clone https://github.com/AF-Cabouat/PREVis-scales.git
```
or by downloading the corresponding zip archive and extracting it to a known location.

## Python environment

### Preparation for Python prerequisites under Windows

Under Windows, first install the [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/), then run the command
```
./vs_buildtools.exe --norestart --passive --downloadThenInstall --includeRecommended --add Microsoft.VisualStudio.Workload.NativeDesktop --add Microsoft.VisualStudio.Workload.VCTools --add Microsoft.VisualStudio.Workload.MSBuildTools
```
in the same directory where you downloaded the Microsoft C++ Build Tools installer (i.e., `vs_buildtools.exe`), and reboot.

### Python notebooks

You will need Python 3.9+ to run these notebooks with JupyterLab. Install a respective Python environment (e.g., https://www.anaconda.com/download/ or https://www.python.org/downloads/) as well as the requirements in one go by using
```
pip install -r requirements.txt
```
(using the [`requirements.txt`](/requirements.txt) file in the root of the repository) or use the following commands:
- ```Jupyterlab```: use the ```pip install jupyterlab``` command, or check https://jupyter.org/install
- ```pandas``` *version 2.0*: use the ```pip install pandas==2.0.0``` command, or check https://pandas.pydata.org/docs/getting_started/install.html 
- ```seaborn``` *version 0.13.1*: use the ```pip install seaborn==0.13.1``` command, or check https://seaborn.pydata.org/installing.html

## R environment

### Software installation
R Markdown files can be run with R version 4.3.2 (see CRAN archives: https://cran.rstudio.com/src/base/R-4/ or, specifically for for Windows, download and install the file `R-4.3.2-win.exe` from https://cran.rstudio.com/bin/windows/base/old/4.3.2) and the RStudio software available on https://posit.co/download/rstudio-desktop/.


### Automated installation of R packages
When running the first notebook, the following libraries will be installed if they are missing:
- ```corrplot```
- ```dplyr```
- ```knitr```
- ```lavaan```
- ```mice```
- ```mifa```
- ```psych```
- ```RColorBrewer```
- ```tibble```
- ```mvnmle```
- ```misty``` **WARNING**: version 0.6.6 (or later) required >> if you already have a version of the misty package older than 0.6.6 the na.test() function for Little's MCAR test will produce a differently structured object and you will get an error.

First, open RStudio with the `Reproduce1-EFA.Rmd` notebook from the [research code/Replication - PREVis development figures/Notebooks](/research%20code/Replication%20-%20PREVis%20development%20figures/Notebooks) directory in the copy of the repository you extracted or cloned.

> To open a file in RStudio, you can use the "File" > "Open File (Ctrl + O)" command from the top menu in RStudio. Alternatively, you can go to the "Files" tab in the section on the bottom-right, click on the "..." to the right of the "Home" directory and navigate to the [research code/Replication - PREVis development figures/Notebooks](/research%20code/Replication%20-%20PREVis%20development%20figures/Notebooks) directory in the copy of the repository you extracted or cloned, and double-click on the file you want to open.
In both cases, the notebook will open at the top-left, taking up the main part of the RStudio window.

After opening the `Reproduce1-EFA.Rmd` file, a yelow ribbon will appear at the top of the file's window with a note about the missing R packages mentioned above. 
**Simply click on "Install" to get them installed. **

>*If the note does not appear at first, make an attempt to run the first chunk called* ```{r libraries}``` *by clicking on the "Play" (green triangle) button at the top right corner of this chunk, or place your cursor anywhere inside the chunk and press Ctrl + R. The note should appear above after attempting to run the chunk.*

 One all packages have been installed, you will be ready to run the notebooks as described below.

---


# How to run notebooks

Run notebooks in order (see [next part of this readme](#running-notebooks-in-order)): the ```Data_Analysis/``` folder and output nested structure will be generated from the code.

## R notebooks

For each notebook:
1. First run the chunk called ```{r oursetup}``` alone by clicking on the "Play" (green triangle) button at the top right corner of this chunk, or put your cursor inside the chunk and hit Ctrl + R. The ```{r oursetup}``` chunk is usually the first in the file, except for `Reproduce1-EFA.Rmd` where it is the second chunk 
2. In the top-right window in RStudio, under the "Environment" tab, find the variable ```my_dir``` in "Values" and verify that it hold the absolute path to the wordking directory for your local [research code/Replication - PREVis development figures](/research%20code/Replication%20-%20PREVis%20development%20figures/) folder. If it is not the case (for example, if the variable's value is a relative path), repeat step 1.
3. Then, use the Run button at the top-right corner of the document window and choose "Run all" at the bottom (or press Ctrl + Alt + R).

Then you can proceed by running the notebook by clicking on "Run" in the local menu of the top-left notebook view and selecting "Run All" (or Ctrl + Alt + R). Proceed with running the notebooks as described next.

You can also choose to generate a file containing the code's complete outputs with the ```knit``` package. To that end, instead click on "Knit" in the local menu of the top-left notebook view and select HTML. All HTML files from our original research project are available on our OSF repository at [osf.io/9cg8j](https://osf.io/9cg8j).

## Jupyter (Python) notebooks

First, start the Jupyter notebook server. Navigate to the folder [research code/Replication - PREVis development figures/](/research%20code/Replication%20-%20PREVis%20development%20figures/) of this repository using the command line (If you are on Anaconda Python it is best to do this using the Anaconda prompt):

    cd folder_path


After reaching the folder, start the Jupyter notebook server there using this command line:

    jupyter notebook

This will open a new window in your default browser with the Jupyter lab environment and the list of files and subfolders:

    /Data
    /Data_Analysis
    /Notebooks

If you are running Jupyter Lab on a new OS installation, please note that it might be the first time the default browser is running which could take a short moment. If this does not work out of the box, you can get more help here: https://docs.jupyter.org/en/latest/install.html.

Navigate to the ```Notebooks/``` folder. For each of the notebooks listed below, open the file by clicking on its name and then from the "Run" menu on Jupyterlab's top menu bar choose "Run all cells".

# Running notebooks in order
Notebooks in this folder are numbered following their running order.

## ```Reproduce1-EFA.Rmd``` (R notebook)
Exploratory Factor Analyses described in ***section 5.5*** and ***Appendices F*** to ***J*** in the paper. The equivalent notebook was uploaded on OSF as ```3-EFA-+-all.Rmd```
- **INPUT files** from ```Data/```: ```ratings-[...].csv``` [1 to 7]:
    - files numbered ```1---6``` correspond to A---F stimuli ratings (one file per stimulus)
    - file numbered ```7``` corresponds to all collected ratings across stimuli (related to output files labeled ```Agg```)
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedPlots-EFA/```: contains files related to ***Appendix I***.
    - ```generatedData-EFA/```: in particular, the ```Agg/``` subfolder contains the factor loadings tables we used to conduct analyses described in ***Appendix K***. 

> ***WARNING*** *If you are using this code with another dataset, for example to develop a new scale or questionnaire, please note that we use Little's test which is an outdated method to check if missing data is MCAR. More modern approaches such as Jamshidian and Jalal’s approach (see Hayes et al., 2024 at [doi.org/10.3758/s13428-024-02494-1](https://doi.org/10.3758/s13428-024-02494-1)) are not applicable to our case because missing data was extremely low in our dataset (less than 1%). However, if your dataset has a higher level of missing data, you should change the MCAR method in the ```na.test()``` function call (from the ```misty``` pachage) in this notebook as well as in all other ```.Rmd``` notebooks in this folder.*

## ```Reproduce2-reliability.Rmd``` (R notebook)
Reliability analyses described in ***Appendix L***. The equivalent notebook was uploaded on OSF as ```5a-reliability.Rmd```
- **INPUT file** from ```Data/```:
    - ```data/ratings-stimulus.csv```
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedData-CFA/reliability/```: this notebook will produce multiple individual files for future processing in Jupyter notebook ```Reproduce4```.

*This notebook uses a variable called ```full_Readability_factors``` to filter the dataset. This variable represents the 4-factors structure described in ***Appendix K*** (see also ***Fig. 28*** in the paper, and corresponding OSF file: ```Phase 2 - Scale development/Manual figures/EFA_loadings-4_factors.pdf``` at [osf.io/wrs8k](https://osf.io/wrs8k))*

If you are interested in reproducing the table underlying Figure 28, you can do so before running the ```Reproduce2-reliability.Rmd``` notebook. Please refer to Figure 28's caption in Appendix K: it contains instructions on how to proceed based on the OSF repository files at [osf.io/9cg8j](https://osf.io/9cg8j) (```Phase 2 - Scale development``` folder).

## ```Reproduce3-MG-CFA[Modelx].Rmd``` [Model1, Model_2, Model_3, Model_final] (R notebook)
Multi-Group Confirmatory Factor analysis for each model explored as described in ***Appendix M***. Each notebook uses a different ```this_model``` variable to filter the dataset. The equivalent notebooks were uploaded on OSF as ```5b-MG-CFA-[Modelx].Rmd```.

Run the notebooks in the order mentioned above.

- **INPUT file** from ```Data/```:
    - ```data/ratings-stimulus.csv```
- **OUTPUT files** in ```Data_Analysis/```:
    - ```generatedData-CFA/```: fit indices values csv files
    - ```generatedPlots-CFA/correlations/```

## ```Reproduce4-reliability-MG-CFA-analysis.ipynb``` (Jupyter notebook)
Structuring data from ```Reproduce2-reliability.Rmd``` and ```Reproduce3-MG-CFA.Rmd``` (above) notebooks outputs, to facilitate analysis described in ***Appendix N.2*** and generate data for Tables 20 to 25. The equivalent notebook was uploaded on OSF as ```6-reliability-MG-CFA-analysis.ipynb```

- **INPUT files** from ```Data_Analysis/generatedData-CFA```:
    - ```fit_indices-[...].csv``` [Model1, Model_2, Model_3]
    - ```/reliability/to aggregate/[...][...]-reliability.csv``` [understand, layout, dataFeat, dataRead]x[Model1, Model_2, Model_3, Model_final]. *Note: we built this notebook with 3 models and edited it after selecting the final model to obtain our final instrument's reliability metrics as reported in **Appendix N.3**.*
- **OUTPUT files** in ```Data_Analysis/```:
    - ```CFA/```: fit indices ranking and metrics summary outputs to compare the 3 models' goodness-of-fit performances.
    - ```generatedData-CFA/reliability```: concatenated reliability metrics tables for each model (as well as summary .csv and .tex files for each).

## ```Reproduce5-rating plots.ipynb``` (Jupyter notebook)
Subscales average scores point plots with 95% CI, as PDF files.
- **INPUT file** from ```Data_Analysis/```:
    - ```data/ratings-stimulus.csv```
- **OUTPUT files** in ```Data_Analysis/```:
    - ```RatingPlots-PREVis``` ***Fig. 30*** to ***Fig. 53*** in the paper: data generated from invidiual PREVis subscales, for each stimulus, with individual items' average ratings and 95% CI.
    - ```RatingPlots-factors``` ***Fig. 29*** and ***Fig. 54*** to ***Fig. 71*** in the paper: plots generated for each item in the 4-factors solution from ***Appendix J***, with the item's and the factor's average ratings and 95% CI, across stimuli.

## ```Reproduce4-reliability-MG-CFA-analysis.ipynb``` (Jupyter notebook)
Data pre-processing from ```5-a``` and ```5-b``` (above) notebooks outputs, to facilitate analysis described in ***Appendix M.2***.

- **INPUT files** from ```Data_Analysis/generatedData-CFA/```:
    - ```fit_indices-[...].csv``` [Model1, Model_2, Model_3]
    - ```/reliability/to aggregate/[...][...]-reliability.csv``` [understand, layout, dataFeat, dataRead]x[Model1, Model_2, Model_3, Model_final]. *Note: we built this notebook with 3 models and edited it after selecting the final model to obtain our final instrument's reliability metrics as reported in **Appendix N.3**.*
- **OUTPUT files** in ```Data_Analysis/```:
    - ```CFA/```: fit indices ranking and metrics summary outputs to compare the 3 models' goodness-of-fit performances.
    - ```generatedData-CFA/reliability```: concatenated reliability metrics tables for each model (as well as summary .csv and .tex files for each).

## ```Reproduce5-rating plots.ipynb``` (Jupyter notebook)
Subscales average scores point plots with 95% CI, as PDF files.
- **INPUT file** from ```Data_Analysis/```:
    - ```data/ratings-stimulus.csv```
    - **OUTPUT files** in ```Results/Data_Analysis/```:
    - ```generatedPlots/ratings-factors``` contains ***Fig. 48*** to ***Fig. 65*** in the paper: plots generated for each item in the 4-factors solution from ***Appendix J***, with the item's and the factor's average ratings and 95% CI, across stimuli.
    - ```generatedPlots/ratings-PREVis```: contains ***Fig. 30*** to ***Fig. 47*** in the paper: data generated from invidiual PREVis subscales, for each stimulus, with individual items' average ratings and 95% CI.

- **OUTPUT files** in ```Data_Analysis/RatingPlots-factors/``` and ```Data_Analysis/RatingPlots-PREVis/``` 


---

# List of generated figures in ```Data_Analysis/``` folder

Now, everyhting is done and the resulting figures are in the subfolders from your [research code/Replication - PREVis development figures/Data_Analysis](/research%20code/Replication%20-%20PREVis%20development%20figures/Data_Analysis) folder.

## Correlation matrices
<code style="color : Gold">Fig. 14</code> shows the correlation matrix from our exploratory survey data across all stimuli after Multiple Imputation treatment for missing data. The PDF file for this figure can be found in ```generatedPlots-EFA/corrAgg-MICE.pdf```

<code style="color : Gold">Fig. 15</code> to <code style="color : Gold">20</code> are also in the ```generatedPlots-EFA/``` folder under the names ```corrA-MICE.pdf``` to ```corrF-MICE.pdf```

## Screeplots

<code style="color : Gold">Fig. 21</code> shows a scree plot from parallel analysis for our exploratory survey data across all stimuli (similar to the data behind Fig. 14). PDF file for this figure: ```generatedPlots-EFA/ScreePlot-Agg.pdf```

<code style="color : Gold">Fig. 22</code> to <code style="color : Gold">27</code> are also in the ```generatedPlots-EFA/``` folder under the names ```ScreePlot-A .pdf``` to ```ScreePlot-F .pdf```

## Ratings figures

<code style="color : Gold">Fig. 29</code> shows average PREVis subscale ratings for each of the stimuli used in our exploratory study. PDF file for this figure: ```RatingPlots-PREVis/PREVis_subscales_ratings.pdf```

<code style="color : Gold">Fig. 30</code> to <code style="color : Gold">53</code> show individual items and scale average for each PREVIs subscale (Understand, Layout, DataReat, and DataFeat) and each stimuli (A to F). The PDF files are in the ```RatingPlots-PREVis/``` folder under names ```A-PREVis_items_ratings_Understand.pdf``` (<code style="color : Gold">Fig. 30</code>) to ```F-PREVis_items_ratings_DataFeat.pdf``` (<code style="color : Gold">Fig. 53</code>).

<code style="color : Gold">Fig. 54</code> to <code style="color : Gold">71</code> show ratings from each of the 29 candidate items against their umbrella factor's average for each of the 6 stimuli in our exploratory study. The PDF files are in the ```RatingPlots-factors/``` subfolder with the filename prefix ```Full_factors_ratings-``` followed by the *factor_name* and  the *item_stem*. For example <code style="color : Gold">Fig. 54</code> shows ratings for the *confid* item from the *Understand* factor and the PDF filename is ```Full_factors_ratings-Understand_confid.pdf```

---

# List of generated tables in ```Data_Analysis/``` folder

Now, everyhting is done and the resulting data files are in the subfolders from your [research code/Replication - PREVis development figures/Data_Analysis](/research%20code/Replication%20-%20PREVis%20development%20figures/Data_Analysis) folder.

## Factor loading tables 

<code style="color : Gold">Tables 14</code> to <code style="color : Gold">17</code> show factor loadings for the Exploratory Factor Analyses with 1 to 4 factors. For each EFA, a single table includes factor loadings for 29 items, and proportion of the total variance explained by each factor in our survey data.
The underlying data can found in the ```/generatedData-EFA/Agg``` folder under the names ```PA1 Stimuli 1 factors - Agg.csv```to ```PA1 Stimuli 4 factors - Agg.csv```.

>*Other datasets are available in this folder such as the results for EFA with 5 factors, or EFA with the ML (Maximum Likelihood) method. This data was not included in our Appendices*

## Fit metrics from Confirmatory Factor Analysis and reliability analyses rsults
All analyses output are saved as csv files in the ```/generatedData-CFA``` subfolder.

The data for <code style="color : Gold">Table 19</code> can be found in the ```fit_indices-full_model.csv``` file.

The data for <code style="color : Gold">Table 20</code> can be found in the ```items_scale_reliability_per_factor.csv``` file.

The data for <code style="color : Gold">Table 22</code> to <code style="color : Gold">24</code> can be found in the ```/reliability``` subfolder, in files ```Model_1-reliabilities_short.csv```, ```Model_2-reliabilities_short.csv```, and ```Model_3-reliabilities_short.csv```.

<code style="color : Gold">Table 25</code> is based on the data from files ```fit_indices-Model_1.csv``` to ```fit_indices-Model_3.csv```.

The data for <code style="color : Gold">Table 27</code> can be found in the ```/reliability``` subfolder in file ```Model_final-reliabilities_short.csv```