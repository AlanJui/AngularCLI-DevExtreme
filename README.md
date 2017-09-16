# AngularCLI-DevExtreme 專案指引

## 專案摘要

實驗將 Angular 4 + Angular CLI + DevExtreme 17.1 + RESTful API Service 三大技術整合（含：jQuery, Bootstrap ），做為 Web App 前端平台。

專案採用技術：

 - 編譯工具： Angular CLI

 - 組建工具： Angular CLI

 - 測試工具： Angular CLI 
    * 單元測試： Karma
    * 功能測試： Protractor

 - UI介面：  
    * DevExtreme 17.1
    * Bootstrap 3

 - 其它：
    * RESTful Web API Service (採用 ASP.NET Core 2 + EF Core 2 )
    * jQuery

為使以下「開發作業程序」、「組建作業程序」能正常操作，請依「作業前置準備」章節內容所述，在開發機備妥應安裝之軟體套件。


---

## 開發作業程序

想在開發機觀察本專案之輸出結果；或是要以本專案當基底，開始進行程式的開發工作，請依以下所述之程序進行操作。

### （1）下載專案檔案
```
$ git clone git@github.com:AlanJui/AngularCLI-DevExtreme.git
```

### （2）進入專案資料夾
```
$ cd AngularCLI-DevExtreme
```

### （3）安裝專案所需的 NodeJS 套件
```
$ npm install
```

### （4）啟動自動編譯與瀏覽結果功能
```
$ ng serve
```

若需自開發機以外的電腦瀏覽 Web App 的需求；或是需要變更 Angular CLI 預設的 Port 號，可依以下之指令範例，自行依需求變更。
```
$ ng serve --host 0.0.0.0 --port 5000
```

### （5）瀏覽輸出結果
使用 Web 瀏覽器，瀏覽以下網址：
```
http://localhost:4200
```

### （6）使用編輯器／IDE工具進行開發工作
在開發過程進行之中，屬 HTML、CSS、TypeScript 的檔案，若有內容的變更，或是使用者做了存檔動作，Web 瀏覽器內的內容亦會隨之更新。


---


## 組建（Build）作業程序

### （1）進入專案資料夾根路徑
先進入專案資料夾的「根路徑」，再進行後續之操作。

### （2）執行組建指令
執行以下指令，組建完成的結果，將輸出放進 `dist` 目錄之中。
```
$ ng build
```



---


## 單元測試作業程序

單元測試（Unit Tests）所採用之技術為：(Karma)[https://karma-runner.github.io/1.0/index.html]。

### （1）進入專案資料夾根路徑
先進入專案資料夾的「根路徑」，再進行後續之操作。

### （2）執行測試指令
執行以下指令，開始單元測試工作。
```
$ ng test
```


---


## 功能測試作業程序

Angular 所謂的 End-to-end Test，依其「目的」，大致可視作軟體工程之「整合測試」或「功能測試」。此處視作「程式開發人員」所執行的「功能測試」。

功能測試所採用之技術為：[Protractor](http://www.protractortest.org/#/)。

既稱：功能測試，當然，專案欲開發之系統得先啟動。所以，於「單元測試」不同之處，請記得先執行 ng serve ，將專案的系統啟動後；再依據以下之指令，執行功能測試。

### （1）進入專案資料夾根路徑
先進入專案資料夾的「根路徑」，再進行後續之操作。

### （2）執行測試指令
執行以下指令，開始功能測試工作。
```
$ ng serve
$ ng e2e
```


---


## 測試機佈署作業程序

### （1）進入專案資料夾根路徑
先進入專案資料夾的「根路徑」，再進行後續之操作。

### （2）執行組建指令
執行以下指令，組建完成的結果，將輸出放進 `dist` 目錄之中。
```
$ ng build --dev -e staging
```

### （3）在開發機模擬佈署結果
在 `dist` 目錄之下的所有檔案，經佈署後，放到「測試機」或「正式機」後的結果將是什麼模樣，可透過以下指令，先在開發機進行驗證。
```
$ ng serve --dev -e staging
```

### （4）打包佈署用檔案
將 `dist` 目錄之下的所有檔案複製出來。複製檔案時務必留意 dist 目錄之下，是否還有子目錄。

【範例】：
```
$ cp -r dist/* docs/
```


---


## 正式機佈署作業程序

### （1）進入專案資料夾根路徑
先進入專案資料夾的「根路徑」，再進行後續之操作。

### （2）執行組建指令
執行以下指令，組建完成的結果，將輸出放進 `dist` 目錄之中。
```
$ ng build --prod
```

### （3）在開發機模擬佈署結果
在 `dist` 目錄之下的所有檔案，經佈署後，放到「測試機」或「正式機」後的結果將是什麼模樣，可透過以下指令，先在開發機進行驗證。
```
$ ng serve --prod
```

### （4）打包佈署用檔案
將 `dist` 目錄之下的所有檔案複製出來。複製檔案時務必留意 dist 目錄之下，是否還有子目錄。


---


## 作業前置準備

使用本專案的原始程式碼之前，須在開發機中，先完成以下軟體之安裝。

 - Git
 - NodeJS & NPM
 - Angular CLI


---


## 參考指南

 - [Angular CLI](https://github.com/angular/angular-cli) ：Angular CLI 常用指令操作指引

 - [Git Page 快速入門](https://pages.github.com/)
 
 - [Configuring a publishing source for GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

