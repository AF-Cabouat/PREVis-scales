# Notebooks - Exploratory study data analysis

This folder contains the notebooks used to perform analyses of data collected in the exploratory survey—see ***Sections 5.4*** and ***5.5*** as well as ***Appendices F–N*** in the paper. Running the notebooks will reproduce Figures 14–27 and 29–71 (in the appendix).

# Requirements

These instructions were tested on a clean Windows 10 installation (and with the specific requirements noted below, and specifically [Anaconda Python](https://www.anaconda.com/) for the Python environment). Please note that for the installation of the prerequisites (Anaconda Python) you may need to disable Windows' virus and malware protection—otherwise the installation takes forever (at least in a VirtualBox VM). To do so, open the Windows Settings and then, under "Updates & Security > Windows Security > Virus & threat protection > Virus & threat protection settings > Manage settings" (temporarily) disable "Real-time protection" (but only ever do this in a separate VM, not on your main system).

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
R Markdown files can be run with R version 4.3.2 (see CRAN archives: https://cran.rstudio.com/src/base/R-4/ or, specifically for for Windows, download and install the file `R-4.3.2-win.exe` from https://cran.rstudio.com/bin/windows/base/old/4.3.2) and the RStudio software available on https://posit.co/download/rstudio-desktop/. We will also need Rtools to compile arhived versions of some packages: download and install the Rtools43 installer from https://cran.rstudio.com/bin/windows/Rtools/rtools43/rtools.html.


### Automated installation of R packages
When running the first notebook, RStudio will attempt to load the following libraries, and to install them if they are missing:
- ```corrplot```
- ```dplyr```
- ```knitr```
- ```lavaan```
- ```mice```
- ```mifa```
- ```psych```
- ```RColorBrewer```
- ```tibble```

- ```misty``` **WARNING**: version 0.6.0 required >> if you already have a version of the misty package other than 0.6.0, the code in the first notebook will replace your current version with the 0.6.0 version!

To ensure you install the correct version of the packages, follow the steps below:

#### Step 1
First, open RStudio with the `Reproduce1-EFA.Rmd` notebook from the [research code/Replication - PREVis development figures/Notebooks](/research%20code/Replication%20-%20PREVis%20development%20figures/Notebooks) directory in the copy of the repository you extracted or cloned.

> To open a file in RStudio, you can use the "File" > "Open File (Ctrl + O)" command from the top menu in RStudio. Alternatively, you can go to the "Files" tab in the section on the bottom-right, click on the "..." to the right of the "Home" directory and navigate to the [research code/Replication - PREVis development figures/Notebooks](/research%20code/Replication%20-%20PREVis%20development%20figures/Notebooks) directory in the copy of the repository you extracted or cloned, and double-click on the file you want to open.
In both cases, the notebook will open at the top-left, taking up the main part of the RStudio window.

#### Step 2

After opening the `Reproduce1-EFA.Rmd` file, a yelow ribbon might appear at the tope of the file's window with a note about the missing R packages mentioned above: **please do NOT choose to install these**. Click on the x button on the right side of the message instead, and run the first chunk called "r libraries" by clicking on the "Play" (green triangle) button at the top right corner of this chunk, or place your cursor anywhere inside the chunk and press Ctrl + R.

After running this chunk of code, please check the messages in the "Console" tab at the bottom left of the RStudio window. You will see one of two possible messages:

> misty package version 0.6.0 installed and loaded. You can proceed with the next chunk.

You can proceed to running the notebooks (read below on how to do that).

> RESTARTING R TO PREPARE CLEAN INSTALLATION OF CORRECT PACKAGE VERSION. PLEASE RUN THIS CODE AGAIN.

If you read this warning, you will need to run the same chunk again in order to install the correct version of the misty package.


# How to run notebooks

Run notebooks in order (1 to 3): the ```Data_Analysis/``` folder and output nested structure will be generated from the code.

For each notebook:
1. First run the chunk called ```{r oursetup}``` alone by clicking on the "Play" (green triangle) button at the top right corner of this chunk, or put your cursor inside the chunk and hit Ctrl + R. The ```{r oursetup}``` chunk is usually the first in the file, except for `Reproduce1-EFA.Rmd` where it is the second chunk 
2. In the top-right window in RStudio, under the "Environment" tab, find the variable ```my_dir``` in "Values" and verify that it hold the absolute path to the wordking directory for your local [research code/Replication - PREVis development figures](/research%20code/Replication%20-%20PREVis%20development%20figures/) folder. If it is not the case (for example, if the variable's value is a relative path), repeat step 1.
3. Then, use the Run button at the top-right corner of the document window and choose "Run all" at the bottom (or press Ctrl + Alt + R).

Then you can proceed by running the notebook by clicking on "Run" in the local menu of the top-left notebook view and selecting "Run All" (or Ctrl + Alt + R). Proceed with running the notebooks as described next.

You can also choose to generate a file containing the code's complete outputs with the ```knit``` package. To that end, instead click on "Knit" in the local menu of the top-left notebook view and select HTML. All HTML files from our original research project are available on our OSF repository at [osf.io/9cg8j](https://osf.io/9cg8j).


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
