var tipuesearch = {"pages": [{'title': '各組期末報告說明', 'text': '', 'tags': '', 'url': '各組期末報告說明.html'}, {'title': '執行規劃', 'text': '', 'tags': '', 'url': '執行規劃.html'}, {'title': '手足球系統模擬', 'text': '專案成果摘要 \n 專案執行動機 \n 相關文獻探討 \n 專案執行成員 \n 執行使用套件 \n 專案執行過程規劃 \n 專案執行內容 \n 專案討論 \n \n', 'tags': '', 'url': '手足球系統模擬.html'}, {'title': '設計與繪圖', 'text': '', 'tags': '', 'url': '設計與繪圖.html'}, {'title': '零組件尺寸分析', 'text': '手足球系統的零組件尺寸分析 (可行性分析) \n', 'tags': '', 'url': '零組件尺寸分析.html'}, {'title': '參數設計與繪圖', 'text': '手足球系統的零組件參數設計與繪圖 (零組件初步設計繪圖) \n Onshape 零組件連結 \n', 'tags': '', 'url': '參數設計與繪圖.html'}, {'title': '細部設計與BOM', 'text': '手足球零件格式說明 \n 手足球零件格式說明 \n 零件 BOM \n 手足球零組件材料表 (含零組件下載連結) \n 零件尺寸圖 \n \n 零件部分組裝圖 \n 零件部分組裝圖 \n 3D 零組件爆炸圖 \n 3D 零組件爆炸圖 \n', 'tags': '', 'url': '細部設計與BOM.html'}, {'title': 'V-rep 動態模擬', 'text': '', 'tags': '', 'url': 'V-rep 動態模擬.html'}, {'title': '送球機構設計與模擬', 'text': '', 'tags': '', 'url': '送球機構設計與模擬.html'}, {'title': '系統功能展示', 'text': '手足球模擬系統功能展示 (模擬展示與說明影片) \n', 'tags': '', 'url': '系統功能展示.html'}, {'title': '結案報告', 'text': '', 'tags': '', 'url': '結案報告.html'}, {'title': '專案口頭簡報', 'text': '各組利用倉儲中的 Reveal.js 進行結案簡報 (結案口頭簡報) \n', 'tags': '', 'url': '專案口頭簡報.html'}, {'title': '專案報告書', 'text': '各組完成 html 與 pdf 格式之手足球專案結案報告 (文字結案報告書) \n', 'tags': '', 'url': '專案報告書.html'}, {'title': '期中專案報告', 'text': '', 'tags': '', 'url': '期中專案報告.html'}, {'title': 'Introduction', 'text': 'Collaborative Product Design Internship Group 2 \n 協同產品設計實習第二組 \n Github \n Blog \n Reveal \n \n \n \n \n Leader \n Assignments \n \n \n 40623249 李秉樺 \n V-rep模擬 \n \n \n \n \n \n \n \n Member \n Assignments \n \n \n 40623202 吳姍蓉 \n 管理倉儲、網站、BLOG \n \n \n 40623209 李芳瑜 \n 管理倉儲、網站、BLOG \n \n \n 40623214 吳家文 \n V-rep模擬 \n \n \n 40623215 吳柏毅 \n Onshape \n \n \n 40623220 蔡崇廷 \n V-rep模擬 \n \n \n 40623236 黃子峰 \n V-rep模擬 \n \n \n 40623247 廖峻祥 \n 管理倉儲、網站、BLOG \n \n \n 40623250 湯峻傑 \n Onshape \n \n \n 40623251 鄧靖宣 \n V-rep模擬 \n \n \n 40423217 阮奕誠 \n 管理倉儲、網站、BLOG \n \n \n \n', 'tags': '', 'url': 'Introduction.html'}, {'title': 'Directory Structure', 'text': '第二位想要編輯這裡 \n \n CMSimfly 的動態系統採用 Python3 + Flask 建構, 並且利用 Beatifulsoup 解讀位於 contig 目錄中的 content.htm 超文件檔案. \n content.htm 檔案可以透過動態系統中的 generate_pages 功能, 將超文件轉為位於 content 目錄中的個別頁面檔案. \n 動態系統與靜態系統則共用 downloads, images, static 等目錄, 其中 downloads 目錄存放在動態系統上傳的文件檔, 而 images 目錄則存放動態系統所上傳的影像檔案, 包括 jpg, png 與 gif 等格式圖檔. \n static 目錄則存放在動態與靜態系統所需要的 Javascript 或 Brython 程式檔. \n 還有這裡 \n 首先修改這裡 \n', 'tags': '', 'url': 'Directory Structure.html'}, {'title': 'Course', 'text': '', 'tags': '', 'url': 'Course.html'}, {'title': 'week1', 'text': '亂數分組程式 \n 本程式主要功能是能夠快速的進行組員的隨機快速分配，讓程式一開始先載入固定的檔案(此範例就是txt檔)，內容是所有組員的名字，再讓使用者輸入組別數、組員人數，交由程式去分配，最後再讓程式將結果輸出成另一份的txt檔 \n 過程為: \n \n 讀進學生資料, 將各學生學號轉入數列 \n 利用亂數模組中的 shuffle 函式, 隨機弄亂學號數列 \n 利用 for 迴圈, 從學號數列中一一取出, 準備進行分組 \n 在迴圈中利用整數相除後取得餘數的規律, 依照每組幾人的規劃進行分組 \n 在分組過程, 再設法利用數列的 append, 將各組學員學號納為分組數列 \n 最後將各組數列再放入選課班級數列中備用 \n 其一組最多可以20~30人，無法再超過 \n \n 參考程式架構 \n import random\nfilename = \'cdbw3_student_list.txt\'\n# 每組人數\nnum_in_one_group = 11\n# 組序由 1 開始\ngroup = 1\n# 各班分組後所得數列\nc2019 = []\nwith open(filename) as f:\n    # 讀進全部檔案, 轉進數列, 並同時將各行的 \\n 去除\n    read_data = f.read().splitlines() \nprint("共有 " + str(len(read_data)) + " 位學員")\n# 利用 shuffle 將數列隨機弄亂\nrandom.shuffle(read_data)\nfor i in range(len(read_data)):\n    # 利用整數相除的餘數進行分組\n    if i%num_in_one_group == 0:\n        # 列出分隔符號\n        print("-"*20)\n        print("group " + str(group) +":")\n        # 在分組區隔時重置各組學員數列\n        group_list = []\n        print()\n        # 同時列出與分隔標註對應 i 的數列內容\n        print(read_data[i])\n        group_list.append(read_data[i])\n        group = group + 1\n    else:\n        # 逐一列出同組的其他學員\n        print(read_data[i])\n        group_list.append(read_data[i])\n    if i%num_in_one_group == 0:\n        c2019.append(group_list)\n# c2019 為該班分組後所得分組數列\nprint(c2019) \n', 'tags': '', 'url': 'week1.html'}, {'title': 'week2', 'text': '228和平紀念日放假 \n \n', 'tags': '', 'url': 'week2.html'}, {'title': 'Week3', 'text': '配置ungit \n 根據\xa0 https://2019wcm.blogspot.com/2019/03/ungit .html \xa0的設定, 完成  ungit  配置. \n 教學影片： \xa0 https://www.youtube.com/watch?v=lB-spECfhr8 \xa0 \n 1. 下載ungit與node.js程式碼，然後將nodejs放入kmol_2019的data中。 \n \n 2.修改 ungit 的內容 \n (1)路徑如下: \n \n (2)修改內容: \n #!/bin/sh \nbasedir=$(dirname "$(echo "$0" | sed -e \'s,\\\\,/,g\')") \n \n# Yen 必須關掉下列設定, 讓 ungit 可以導引 git 讀取 y:\\home 下的 .gitconfig 設定 \n#case `uname` in \n    #*CYGWIN*) basedir=`cygpath -w "$basedir"`;; \n#esac \n \nif [ -x "$basedir/node" ]; then \n  "$basedir/node"  "$basedir/node_modules/ungit/bin/ungit" "$@" \n  ret=$? \nelse  \n  node  "$basedir/node_modules/ungit/bin/ungit" "$@" \n  ret=$? \nfi \nexit $ret \n (3)修改後的內容: \n \n 3. 在 start.bat 中加入\xa0 set USERPROFILE=%Disk%:\\home \n \n git \xa0 http \xa0與 ssh \n 利用 ssh 對 git 改版, 必須使用\xa0 home/.ssh/config 設定, 才能透過 proxy 伺服器進行連線, 由於在 IPv6 環境下, 必須要透過 proxy 才能對 Git 連線, 因此若無 config, 無法對遠端改版 \n ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H 140.130.17.53:3128 %h %p\n\nHost github.com\nUser git\nPort 22\nHostname github.com\n\nIdentityFile "y:\\home\\.ssh\\id_rsa"\n\nTCPKeepAlive yes\nIdentitiesOnly yes\n\nHost ssh.github.com\nUser git\nPort 443\nHostname ssh.github.com\n\nIdentityFile "y:\\home\\.ssh\\id_rsa"\n\nTCPKeepAlive yes\nIdentitiesOnly yes \n', 'tags': '', 'url': 'Week3.html'}, {'title': 'Week4', 'text': '在配置好的 ungit\xa0 的環境下，利 用 ssh 與 private key 對 Github 倉儲提交推送 。 \n 01： \n \n clone 位址：git@github.com:mdekmol/cd2019b-task1-2019cdb_t1_g2.git \n (cmd視窗執行)Y:/cd project/cd  cmstest /python  wsgi .py 進入將  cmstest  clone 的檔案位址 \n https://localhost：9443 進入測試網站 \n 進行改版( save → generate_page ) \n \n \n Q：同步推送的位址會在哪裡？ \xa0 \xa0 \xa0 近端ungit更新後可以就近端圖像檢視其版本序列所在分支，若權限有取得可行遠端推送，所推送對應的倉儲為 mdecourse。 \n Q：怎麼曉得更新的位址在哪？ \xa0 \xa0 \xa0 由當初 git clone 的倉儲即是。 \n \n 02：\xa0.config (由 SciTE 開啟後內容) \n [user] name = 學號 \xa0 \xa0\xa0 →予以使用者判讀，未有系統功能 email = 學號 @nfu.edu. .tw \xa0 \xa0\xa0 →予以系統行身分確認，使用者須改為自己對應此系統的  gmail [http] proxy =  http://140.130.17.42:3128 \xa0 \xa0\xa0 →為指定連線 proxy，使用者若未在執行裝置上指定(該) proxy，系統會自行抓取該裝置之連線位址 \n 03： \n \n \xa0(cmd視窗執行)Y:/cd project/cd  cmstest / kungit \n \xa0Google chrome 彈出視窗出現 error 訊息： fatal: unable to access \'https://github.com/mdecourse/cmstest/\': Received HTTP code 403 from proxy after CONNECT \n \n \n 進入Google chrome  ungit  彈出視窗，Erroe 警告內文仍可檢視先前版本編輯，發現先前版本新增者為 Scrum，並且編輯紀錄為 5 days ago(且為上週課堂操作示範改版內容)。 \n Q：言下之意我判斷之前在此所更新的該  cmstest  和示範教材為同一個版本序列，遂若我端逕自更新成立會覆蓋教材，且連同 https://github.com/mdecourse/cmstest.git 位址也將被覆蓋？ \n \n \n \n →為"沒有執行權限"該狀況因為  cmstest  是由  mdeocurse  進行 clone，所對應的倉儲並未擁有編輯權限，遂在過去的編輯仍可以在"近端"  ungit  進行檢視，但無法推送至遠端  github \n \n 詳見：\xa0\xa0 https://github.com/mdekmol/cd2019b-task1-2019cdb_t1_g2/wiki \xa0 \n 04： \n 根據\xa0 https://www.youtube.com/watch?v=t4PslV5Abjs\xa0 \xa0 說明如何利用 ssh 與 private key 對 Github 倉儲提交推送，直接執行 git push指令行推送，不需要重複身分驗證。 \n 原先建立的  Y :  \\ 目錄下並沒有 PortableGit 資料夾，遂無法建立對應路徑。於是逕自下載 PortableGit-2.21.0 版本，並設定 path 路徑。 PortableGit-2.21.0下載連結： \xa0 https://git-scm.com/download/win \xa0 \n \n set path9=%Disk%:\\PortableGit;%Disk%:\\PortableGit\\bin; \n 在 path 後加上 %path% \n \n \n   實際操作: \n 國立虎尾科技大學 機械設計工程系 40423217 利用 ssh 與 private key 對 Github 倉儲提交推送 V3畫質提升 \n', 'tags': '', 'url': 'Week4.html'}, {'title': 'Week5', 'text': 'Onshape_Football_Table \xa0模型檔連結 \n Football Table Onshape module Youtube \n Onshape_Football_Table_module_01 \n Onshape_Football_Table_module_02 \n Onshape_Football_Table_module_03 \n Onshape_Football_Table_module_04 \n', 'tags': '', 'url': 'Week5.html'}, {'title': 'Week6', 'text': 'Ungit 近端版本分支合併，以及小組遠端推送問題。處理過程橫跨 Week6 週末到 Wee7 課程時段。 \n \n 解決推送問題：方案1. \n \n .config 內容 user1 修正為對應小組學號 40423217： \n \n .config 內容所描述的 user1 and user2 是謂為同一使用者可以利用 user1 and user2 兩身分，分別進行不同對應帳號，行同一或不同倉儲進行編輯、推送等動作；也因此可以在 .config 內文追加 user3 user4 等身分，行上述作業模式。 \n \n \n 遂根據上述：20190329推送問題： \n \n 可能為 .config 內文 user1 並未修正為小組對應學號 40423217 ，遂無法執行 ssh 在小組推送時的身分驗證。 \n - ProxyCommand y:/PortableGit/mingw64/bin/connect.exe  - -H 140.130.17.32:3128 -  - for 40423217 - url = git@github.com_40423217:mdekmol/cd2019b-task1-2019cdb_t1_g2.git - Host github.com_40423217 - User git - Port 22 - Hostname github.com -  - IdentityFile "y:\\home\\.ssh\\id_rsa_40423217" -  - TCPKeepAlive yes - IdentitiesOnly yes -  - for user2 - url = git@github.com_user2:user2/user2.com.git - Host github.com_user2 - Port 22 - Hostname github.com -  - IdentityFile "y:\\home\\.ssh\\id_rsa_user2" -  - TCPKeepAlive yes - IdentitiesOnly yes \n \n \n \n 持續嘗試推送，在 ungit 視窗出現錯誤： \n \n \n - connect --- simple relaying command via proxy. - Version 1.105 - usage: Y:\\PortableGit\\mingw64\\bin\\connect.exe [-dnhst45] [-p local-port]  - [-H proxy-server[:port]] [-S [user@]socks-server[:port]]  - [-T proxy-server[:port]] - [-c telnet-proxy-command] - host port - ssh_exchange_identification: Connection closed by remote host - fatal: Could not read from remote repository. \n Please make sure you have the correct access rights - and the repository exists. \n \n \n \n \n \n \n \n \n \n\xa0 針對方案 1 狀況處理： \n \n - ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.kmol.info:3128 %h %p(為加上此程式，短暫的不再出現錯誤後可執行檢視，不曉得其功能) - for user1 - url = git@github.com_user1:user1/cmstest.git - Host github.com_user1 - User git - Port 22 - Hostname github.com - IdentityFile "y:\\home.ssh\\id_rsa_user1" - TCPKeepAlive yes - IdentitiesOnly yes - for user2 - url = git@github.com_user2:user2/user2.com.git - Host github.com_user2 - Port 22 - Hostname github.com - IdentityFile "y:\\home.ssh\\id_rsa_user2" - TCPKeepAlive yes - IdentitiesOnly yes \n \n \n \n \n \n 在未指定proxy進行推送時出現錯誤，仍可持續進行推送 \n \n \n', 'tags': '', 'url': 'Week6.html'}, {'title': 'Week7', 'text': '清明節放假 \n \n', 'tags': '', 'url': 'Week7.html'}, {'title': 'Week8', 'text': '練習實習任務三\xa0 : \n http://www.coppeliarobotics.com/helpFiles/en/buildingAModelTutorial.htm \n \n', 'tags': '', 'url': 'Week8.html'}, {'title': 'Week9', 'text': '期中考週 \n 1.學員期中報告影片錄製: 影片內容必須清楚呈現各學員從開學至第八週期間, 與課程內容相關的各項任務執行所完成內容. 2.影片標題與說明 影片錄製完成後, 上傳至個人的 Youtube 網站, 影片標題註記「國立虎尾科技大學機械設計工程系期中報告」並加上課程名稱以及學員學號. 影片說明欄位必須標示與影片內容有關的個人倉儲、網站以及其他相關網際連結. 3.學員填寫自評表單 上課鐘聲響後 25 - 30 分鐘內, 各學員將在即時網際試算表上填寫期中自評成績. 4.個人期中報告影片嵌入網頁 各學員以期中報告作為 H1 頁面標題, 將個人期中報告影片, 依照學號順序, 嵌入分組網站(or 個人網站) 頁面中 5.學員口頭期中報告 \n 各學員依據上述所完成的各項任務內容,\xa0 按照學號順序, 進行 2-3 分鐘的口頭報告. \n', 'tags': '', 'url': 'Week9.html'}, {'title': 'Onshape', 'text': '', 'tags': '', 'url': 'Onshape.html'}, {'title': 'Process', 'text': '零件圖: \n 桌台 \n 球員 \n 桿子 \n 固定環 \n \n \n', 'tags': '', 'url': 'Process.html'}, {'title': 'Combination', 'text': '\n 手足球完整版 \n 為了模擬方便進行而做更改( 簡易版手足球 ) \n', 'tags': '', 'url': 'Combination.html'}, {'title': 'V-rep', 'text': '', 'tags': '', 'url': 'V-rep.html'}, {'title': 'BubbleRob Tutorial.', 'text': 'BubbleRob_Tutorial： www.coppeliarobotics.com/helpFiles/en/bubbleRobTutorial.htm \xa0 \n V-rep_bubblerob_tutorial_02 \n V-rep_bubblerob_tutorial_03 \n V-rep_bubblerob_tutorial_04 \n 最末三段作業出現問題。BubbleRob 無法利用感測器的回傳直做運動條件改變 \n 40423217_V-rep_BubbleRob_Tutorial_V3 \n 出問題段落位置，問題解決中 \n \n', 'tags': '', 'url': 'BubbleRob Tutorial..html'}, {'title': 'Football_Table', 'text': '\n', 'tags': '', 'url': 'Football_Table.html'}, {'title': 'Experience', 'text': '', 'tags': '', 'url': 'Experience.html'}, {'title': '40623202', 'text': '\n \n \n Date \n \n Week \n \n Experience \n \n \n 2019/02/22 \n Week 1 \n 說明本學期評分方式,說明如何自己製作可攜程式。 \n \n \n 2019/03/01 \n Week 2 \n 228連假休息。 \n \n \n 2019/03/08 \n Week 3 \n 分組完成，開始分組任務，對kungit已有初步了解。 \n \n \n 2019/03/15 \n Week 4 \n 本週完成自己製作的可攜程式，使用kungit提交、推送資料。 \n \n \n 2019/03/22 \n Week 5 \n 本週遇到.ssh權限的問題，但尚未找出解決辦法。 \n \n \n 2019/03/29 \n Week 6 \n 本週上課前已解決.ssh、金鑰的問題，練習使用V-rep做 BubbleRob模擬 。 \n \n \n 2019/04/05 \n Week 7 \n 清明連假休息。 \n \n \n 2019/04/12 \n Week 8 \n 下週就是期末考週了，靠著大家這幾週的合作，分組任務也差不多要完成了。 \n \n \n 2019/04/19 \n Week 9 \n 本週是期中考週，上台說明自己完成的工作內容。 \n \n \n 2019/04/26 \n Week10 \n \n \n \n 2019/05/03 \n Week11 \n \n \n \n 2019/05/10 \n Week12 \n \n \n \n 2019/05/17 \n Week13 \n \n \n \n 2019/05/24 \n Week14 \n \n \n \n 2019/05/31 \n Week15 \n \n \n \n 2019/06/07 \n Week16 \n \n \n \n 2019/06/14 \n Week17 \n \n \n \n 2019/06/21 \n Week18 \n \n \n \n \n', 'tags': '', 'url': '40623202.html'}, {'title': '40623209', 'text': '\n \n \n Date \n \n Week \n \n Experience \n \n \n 2019/02/22 \n Week 1 \n 第一週我們學了如何使用亂數分組程式，也說明了本學期的評分方式與取分項目\xa0。 \n \n \n 2019/03/01 \n Week 2 \n 228放假 \n \n \n 2019/03/08 \n Week 3 \n 第三週介紹ungit的設定與使用，亂數分組完畢 \n \n \n 2019/03/15 \n Week 4 \n 第四週 開始建立可攜系統，有別於以往老師直接給，自己建立的時候更有挑戰性， 目前遇到最大的困難是 使用kungit提交、推送資料失敗。 \n \n \n 2019/03/22 \n Week 5 \n 第五週終於解決了前兩週的問題，將各自的可攜系統都架設好，也改用了ssh，這樣以後提交推送都不用打帳號密碼，一切都方便許多。 \n \n \n 2019/03/29 \n Week 6 \n \n 第六週做了實習任務二，因為教學是原文地所以花了一點時間，重做了很多次最後才做出來。 \n 實習任務二 \n \n \n \n 2019/04/05 \n Week 7 \n 清明節放假 \n \n \n 2019/04/12 \n Week 8 \n 本週練習 實習任務三 ， \n 除了 \xa0 繪製零組件外, 還必須考慮模擬過程的實用性，必須要先掌握各零組件基本的運動與動態特性，可以學習如何建立適用於 \xa0 V-rep \xa0 的零件模型. \n \n \n \n 2019/04/19 \n Week 9 \n 期中考週，完成期中考應做事項。 \n \n \n \n', 'tags': '', 'url': '40623209.html'}, {'title': '40623214', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n 講解本學期評分標準，說明如何製作可攜式系統，本學期分組方式為亂碼分組。 \n \n \n 2019/03/01 \n Week 2 \n 228放假~~~ \n \n \n 2019/03/08 \n Week 3 \n 分組完畢， 老師教我們如何用ungit去整理倉儲，第一次使用很混亂，因為跟以往的推送方式不同。 \n \n \n 2019/03/15 \n Week 4 \n 知道本學期要做手足球系統，在推送時遇到一些問題，權限問題讓我們處理很久。 \n \n \n 2019/03/22 \n Week 5 \n 研究bubbleRob，利用v-rep模擬。 \n \n \n 2019/03/29 \n Week 6 \n \n 繼續研究bubbleRob。 \n BubbleRob操作1 \n \n \n \n 2019/04/05 \n Week 7 \n 清明節放假~~~ \n \n \n 2019/04/12 \n Week 8 \n \n 練習bubbleRob。 \n BubbleRob操作2 \n BubbleRob完成 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623214.html'}, {'title': '40623215', 'text': '\n \n \n Date \n \n Week \n \n Experience \n \n \n 2019/02/22 \n Week 1 \n 第一天上課當然就是說明這學期的評分方式還有學習目標，以及教學製作可攜系統。 \n \n \n 2019/03/01 \n Week 2 \n 二二八放假- \n \n \n 2019/03/08 \n Week 3 \n 分組完成，小組內分配工作以及任務安排，我被分配到的是畫圖工作，因為我之前也是負責Onshape的，所以比較擅長。 \n \n \n 2019/03/15 \n Week 4 \n 完成製作可攜系統。我們組使用kungit提交、推送資料時，出現問題，很久都不能解決，所以覺得有點厭煩不好用。 \n \n \n 2019/03/22 \n Week 5 \n 這週又遇到問題，發現 .ssh下的config裡也要設定身分這樣才不會發生衝突。 \n \n \n 2019/03/29 \n Week 6 \n \n 在BubbleRob Tutorial初步的學習操作V-rep。 \n \n \n \n 2019/04/05 \n Week 7 \n 清明節放假- \n \n \n 2019/04/12 \n Week 8 \n 思考讓手足球能夠從進洞後自動的回到中央處繼續下一局遊戲的設計，幫助組長找出圖的問題。 \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623215.html'}, {'title': '40623220', 'text': '\n \n \n 日期 \n 週\xa0 \n 經驗 \n \n \n 2019/2/22 \n week1 \n 學習如何製作自己的可攜環境及講解本學習的評分 \n \n \n 2019/3/1 \n week2 \n 228放假於第一週補課 \n \n \n 2019/3/8 \n week3 \n \n 利用亂數分組將人員分配完後，各組開始分配任務。 \n ungit的設定與使用 \n \n \n \n 2019/3/15 \n week4 \n 建立SSH的 私鑰與公鑰，建立完後推送時不需要輸入帳密即可推送 \n \n \n 2019/3/22 \n week5 \n 第一次開始自評互評。簡單說明 BubbleRob \n \n \n 2019/3/29 \n week6 \n \n 練習用V-代表做 BubbleRob \n bubbleRob-1 \n bubbleRob-2 \n \n \n \n 2019/4/5 \n week7 \n 清明節放假 \n \n \n 2019/4/12 \n week8 \n \n 練習用V-代表做 BubbleRob \n bubbleRob-3 \n bubbleRob-4 \n \n \n \n 2019/4/19 \n week9 \n 期中報告 \n \n \n 2019/4/26 \n week10 \n \n 利用虛擬主機建立 Host_Only網路連線的近端測試用伺服器 \n https://www.youtube.com/watch?v=zbuB4vTCh2k&feature=youtu.be \n \n \n \n \n', 'tags': '', 'url': '40623220.html'}, {'title': '40623236', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n 本學期評分方式,說明如何自己製作可攜程式 \n \n \n 2019/03/01 \n Week 2 \n 228放假 \n \n \n 2019/03/08 \n Week 3 \n 分組，開始分組任務 \n \n \n 2019/03/15 \n Week 4 \n \n 熟悉v-rep會叫出圖形，位置座標，選轉角度，感測器 \n V-REP bubbleRob Pt1 \n \n \n \n 2019/03/22 \n Week 5 \n \n 組裝 馬達 跑動 \n V-REP bubbleRob Pt2 \n \n \n \n 2019/03/29 \n Week 6 \n V-REP bubbleRob Pt4 \n \n \n 2019/04/05 \n Week 7 \n 清明節放假 \n \n \n 2019/04/12 \n Week 8 \n v rep使用簡介心得 \n \n \n 2019/04/19 \n Week 9 \n 40623236 mid \n \n \n \n', 'tags': '', 'url': '40623236.html'}, {'title': '40623247', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n 說明本學期評分標準及上課模式 \n 還有中期vrep模擬題目講解~ \n \n \n \n 2019/03/01 \n Week 2 \n 228連假 \n \n \n 2019/03/08 \n Week 3 \n 學習自行建立可攜式系統 \n \n \n 2019/03/15 \n Week 4 \n \n 設定在.ssh時所需要用的 Public Keys,這樣可以避免在別人面前推送時打帳蜜被別人看到,利用Public Keys在ungit上快速推送。 \n \n \n \n 2019/03/22 \n Week 5 \n \n 在使用.ssh時因為在home底下沒有設置個人rsa檔,所以在推送時會發生衝突,只有一開始推成功的人才有權限,而在.ssh下的config裡也要設定身分這樣才不會發生衝突。 \n \n \n \n 2019/03/29 \n Week 6 \n \n 閱讀BubbleRob Tutorial學習如何操作V-rep。 \n BobbleRob Tutorial \n \n \n \n 2019/04/05 \n Week 7 \n 清明節放假 \n \n \n 2019/04/12 \n Week 8 \n 在更新Blog時無法正確地更改內容,在w5的隨身系統裡少了pelican所以無法正確的更新。 \n \n \n 2019/04/19 \n Week 9 \n 期中考 \n \n \n 2019/04/26 \n Week10 \n \n \n \n \n', 'tags': '', 'url': '40623247.html'}, {'title': '40623249', 'text': '\n \n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n 說明本學期評分標準，及專題製作題目。 \n 如何分組 \n \n \n \n 2019/03/01 \n Week 2 \n 228連假 \n \n \n 2019/03/08 \n Week 3 \n ungit 介紹及設定建立環境。 \n \n \n 2019/03/15 \n Week 4 \n \n 建立完整的可攜式系統，浮動連結的設定，這學期最大的不同是我們多了kungit可以推送。 \n 用kungit可以更簡單苗了得看到推送的時間線，及當時上傳了甚麼東西，但剛開始用的時候我們遇到了一些問題，例如使用者權限遺失讓我們全組人員都無法成功的commit 上去及資料遺失。 \n \n \n \n 2019/03/22 \n Week 5 \n \n 這次設定了一個很方便的東西叫ssh，設定完這個東西之以後我們推的任何東西都不需要打密碼了。 \n 我們也把之所有的問題解決了的問題解決了。 \n \n \n \n 2019/03/29 \n Week 6 \n \n 我們進入了 實習任務二 。 \n 實習任務二是要我們練習做出可以散必障礙物的程式模擬，因為他的文本都是原文所以做起來是相當的吃力。 \n \n \n \n 2019/04/05 \n Week 7 \n 清明節放假 \n \n \n 2019/04/12 \n Week 8 \n \n 進入 實習任務三 \n 在進行所以project前都要先有計畫，例如說考慮個零件的基本運動狀態，還有模擬過程的步驟，這樣做起來不僅會省時很多還可以練習考慮的細膩程度。 \n \n \n \n \n 2019/04/19 \n Week 9 \n 期中考喔 \n \n \n \n \n', 'tags': '', 'url': '40623249.html'}, {'title': '40623250', 'text': '\n \n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n 介紹這學期所加入的新規章，每周要自評成績及互評成績，透過 ungit 的導入, 讓 git 與 github 在圖形化介面與中文提交訊息的交互應用下, 能夠更加提升學習效果. \n \n \n \n 2019/03/01 \n Week 2 \n 228連假 \n \n \n 2019/03/08 \n Week 3 \n 分配任務，及開始實施各自任務. \n \n \n 2019/03/15 \n Week 4 \n 建立可攜式系統，及使用kungit推送. \n \n \n 2019/03/22 \n Week 5 \n \n 本周再做分組工作，今天完成手足球繪製，在繪製時參照網站上給的尺寸進行繪製，但我發現在裝配的零件上尺寸是相同的經過上學期使用vrep時知道組合件在做拆解時，再配合的尺寸不能一樣，不然無法拆解所以事先更改尺寸，避免造成問題，但還是得實際放到vrep才知道有每有問題. \n \n \n \n 2019/03/29 \n Week 6 \n 更改上週手足球裝配位置 \n \n \n 2019/04/05 \n Week 7 \n 清明節放假 \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623250.html'}, {'title': '40623251', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n \n \n 2019/03/29 \n Week 6 \n \n \n \n 2019/04/05 \n Week 7 \n \n \n \n 2019/04/12 \n Week 8 \n \n \n \n 2019/04/19 \n Week 9 \n \n \n \n \n', 'tags': '', 'url': '40623251.html'}, {'title': '40423217', 'text': '\n \n \n Date \n Week\xa0 \n Experience \n \n \n 2019/02/22 \n Week 1 \n \n \n \n 2019/03/01 \n Week 2 \n \n \n \n 2019/03/08 \n Week 3 \n \n \n \n 2019/03/15 \n Week 4 \n \n \n \n 2019/03/22 \n Week 5 \n \n 20190320_Wednesday_issue&solution_：_Received HTTP code 403 from proxy after CONNECT \n 20190322_issue_and_solution_.gitconfig&Received HTTP code 403 from proxy after CONNECT \n \n \n \n 2019/03/29 \n Week 6 \n \n 20190328_issue&solution \n 20190329_ungit_&_github_used_SSH_revised_failed \n \n \n \n 2019/04/05 \n Week 7 \n \n 20190402_issue_and_solution \n \n \n \n 2019/04/12 \n Week 8 \n \n 20190409_issue_and_solution_.config_content_problem \n \n \n \n 2019/04/19 \n Week 9 \n \n 20190413-19_issue_and_solution_and_Operate_experience \n 20190419_Issue,_Solution_and_Middle_report \n 國立虎尾科技大學_機械設計工程系_協同產品設計實習_40423217_期中報告 \n \n \n \n 20190426 \n Week 10 \n \n \n \n 20190503 \n Week 11 \n \n 20190429_issue_and_solution:_BubbleRob_V5_(Repair_V3) \n 20190502_issue_and_solution:_BubbleRob_R2_V1_(Rough_Sweeping_robot) \n \n \n \n 20190510 \n Week 12 \n \n \n \n 20190517 \n Week 13 \n \n \n \n 20190524 \n Week 14 \n \n \n \n 20190531 \n Week 15 \n \n \n \n 20190607 \n Week 16 \n \n \n \n 20190614 \n Week 17 \n \n \n \n 20190621 \n Week 18 \n \n \n \n \n \n 期中報告： \n https://youtu.be/nE_ms7kHaGY \n cd2019b-task1-2019cdb_t1_g2\xa0 fall\xa0 wiki \n Onshape： \n \n Football_table CAD \n Football_table Youtube \n 國立虎尾科技大學_機械設計工程系_40423217_week5_Football_Table_Onshape_module_01 \n \n 國立虎尾科技大學_機械設計工程系_40423217_week5_Football_Table_Onshape_module_02 \n \n 國立虎尾科技大學_機械設計工程系_40423217_week5_Football_Table_Onshape_module_03 \n \n 國立虎尾科技大學_機械設計工程系_40423217_week5_Football_Table_Onshape_module_04 \n \n \n V-rep： \n \n BubbleRob_Tutorial_V3 ：FAIL \n BubbleRob_Tutorial_V3 下方示範程式為上位修正版本，若搭配 tmp 檔的 scene 檔案必須將： \n  -8 leftMotor=sim.getObjectHandle("bubbleRob_leftMotor") -- Handle of the left motor  -9 rightMotor=sim.getObjectHandle("bubbleRob_rightMotor") -- Handle of the right motor  -10 noseSensor=sim.getObjectHandle("bubbleRob_sensingNose") -- Handle of the proximity sensor  \n 修正為 \n -8 leftMotor=sim.getObjectHandle("BubbleRob_leftMotor") -- Handle of the left motor  -9 rightMotor=sim.getObjectHandle("BubbleRob_rightMotor") -- Handle of the right motor  -10 noseSensor=sim.getObjectHandle("BubbleRob_sensingNose") -- Handle of the proximity sensor \n \n fufunction speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self) -- this is bubbleRob\'s handle\n    leftMotor=sim.getObjectHandle("bubbleRob_leftMotor") -- Handle of the left motor\n    rightMotor=sim.getObjectHandle("bubbleRob_rightMotor") -- Handle of the right motor\n    noseSensor=sim.getObjectHandle("bubbleRob_sensingNose") -- Handle of the proximity sensor\n    minMaxSpeed={50*math.pi/180,300*math.pi/180} -- Min and max speeds for each motor\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    -- Create the custom UI:\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.create(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor) -- Read the proximity sensor\n    -- If we detected something, we set the backward mode:\n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end \n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,speed)\n        sim.setJointTargetVelocity(rightMotor,speed)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,-speed/2)\n        sim.setJointTargetVelocity(rightMotor,-speed/8)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n BubbleRob_Tutorial_V5_S3 ：SUCCESSFUL \n \n function sysCall_init()\n         \n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self) -- this is bubbleRob\'s handle\n    leftMotor=sim.getObjectHandle("BubbleRob_leftMotor") -- Handle of the left motor\n    rightMotor=sim.getObjectHandle("BubbleRob_rightMotor") -- Handle of the right motor\n    noseSensor=sim.getObjectHandle("BubbleRob_sensingNose") -- Handle of the proximity sensor\n    minMaxSpeed={50*math.pi/180,300*math.pi/180} -- Min and max speeds for each motor\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    -- Create the custom UI:\n    xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n                <hslider minimum="0" maximum="100" on-change="speedChange_callback" id="1"/>\n            <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.create(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\n    \nend\nfunction speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\n\nfunction sysCall_actuation() \n    result=sim.readProximitySensor(noseSensor) -- Read the proximity sensor\n    -- If we detected something, we set the backward mode:\n    if (result>0) then backUntilTime=sim.getSimulationTime()+1 end \n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,speed)\n        sim.setJointTargetVelocity(rightMotor,speed)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,speed/8)\n        sim.setJointTargetVelocity(rightMotor,-speed/2)\n    end\nend\n\nfunction sysCall_cleanup() \n    simUI.destroy(ui)\nend  \n BubbleRob_R2_(Rough_Sweeping_robot) ：Prototype_01 \n \n function speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self) -- this is bubbleRob\'s handle\n    forward_leftMotor=sim.getObjectHandle("BubbleRob_R2_forward_leftMotor") -- Handle of the left motor\n    forward_rightMotor=sim.getObjectHandle("BubbleRob_R2_forward_rightMotor") -- Handle of the right motor\n    noseSensorF=sim.getObjectHandle("BubbleRob_R2_forward_sensingNose") -- Handle of the proximity sensor\n    noseSensorL=sim.getObjectHandle("BubbleRob_R2_left_sensingNose")\n    noseSensorR=sim.getObjectHandle("BubbleRob_R2_right_sensingNose")\n    minMaxSpeed={50*math.pi/180,300*math.pi/180} -- Min and max speeds for each motor\n    backUntilTimeF=-1 -- Tells whether bubbleRob is in forward or backward mode\n    -- Create the custom UI:\n    backUntilTimeL=-1\n    backUntilTimeR=-1\n    backwardTime=1.5\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.create(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n\n    resultF=sim.readProximitySensor(noseSensorF) -- Read the proximity sensor\n    \n     sim.setJointTargetVelocity(forward_leftMotor,-speed*2)\n    sim.setJointTargetVelocity(forward_rightMotor,-speed*2)\n\n    if (resultF>0) then backUntilTimeF=sim.getSimulationTime()+backwardTime end\n\n    if (backUntilTimeF>=sim.getSimulationTime()) then\n        sim.setJointTargetVelocity(forward_leftMotor,speed/2)\n        sim.setJointTargetVelocity(forward_rightMotor,speed/2)\n        -- When in forward mode, we simply move forward at the desired speed\n--   print(resultF)\n\n    else\n        \n    end\n\n    resultR=sim.readProximitySensor(noseSensorR)\n    \n    if (resultR>0) then backUntilTimeR=sim.getSimulationTime()+backwardTime end\n\n    if (backUntilTimeR>=sim.getSimulationTime()) then\n        sim.setJointTargetVelocity(forward_leftMotor,speed/2)\n        sim.setJointTargetVelocity(forward_rightMotor,speed/8)\n        -- When in forward mode, we simply move forward at the desired speed\n   \n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        \n--    print(resultR)\n\n    end\n\n    resultL=sim.readProximitySensor(noseSensorL)\n    \n    if (resultL>0) then backUntilTimeL=sim.getSimulationTime()+backwardTime end\n\n    if (backUntilTimeL>=sim.getSimulationTime()) then\n        sim.setJointTargetVelocity(forward_leftMotor,speed/8)\n        sim.setJointTargetVelocity(forward_rightMotor,speed/2)\n        -- When in forward mode, we simply move forward at the desired speed\n    else\n        \n--    print(resultR)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n \n \n', 'tags': '', 'url': '40423217.html'}, {'title': 'Attendance table', 'text': 'on time :\xa0● \n late : △ \n Leave:\xa0 ╳ National holiday:★ \n \n \n \n Member \n 02/22 \n 03/01 \n 03/08 \n 03/15 \n 03/22 \n 03/29 \n 04/05 \n 04/12 \n 04/19 \n 04/26 \n 05/03 \n 05/10 \n 05/17 \n 05/24 \n 05/31 \n 06/07 \n 06/14 \n 06/21 \n \n \n 40623202 吳姍蓉 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623209 李芳瑜 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623214 吳家文 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623215 吳柏毅 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623220 蔡崇廷 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623236 黃子峰 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623247 廖峻祥 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623249 李秉樺 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n \xa0╳ \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623250 湯峻傑 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n 40623251 鄧靖宣 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ╳ \n ╳ \n ● \n ● \n ● \n \n \n \n \n \n 40423217 阮奕誠 \n ● \n ★ \n ● \n ● \n ● \n ● \n ★ \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n ● \n \n \n \n \n \n \n', 'tags': '', 'url': 'Attendance table.html'}, {'title': 'Q＆A', 'text': '全部頁面會因無法正確解讀而誤刪 \n 在特定情況下, 系統會誤刪 config/content.htm 檔案, 目前在單頁或全部頁面編輯存檔之前, 或將上一版本的 content.htm 存入 content_back.htm, 若 content.htm 內容被程式誤刪, 可以利用備份檔案複製回原始內容後, 再進行後續處理. \n 頁面標題不支援特殊符號 \n 各頁面標題目前不支援特殊符號, 例如: "/", "?" 等, 若已經發生程式無法解讀頁面的情況, 只能從編輯 config/content.htm 下手, 若系統位於遠端, 則後續必須要再設法提供一個額外的編輯 config/content.htm 檔案的網際連結功能. \n Video 引用不支援內部引用 \n tinymce 中插入 video 的小視窗, 要移除引用的圖像與連結, 因為一般建議不要在內容中存入 .mp4 的影片資料, 而只接受引入影片 URL 連結. \n', 'tags': '', 'url': 'Q＆A.html'}, {'title': '期中報告', 'text': '40623202 \n \n 40623209 \n \n 40623214 \n \n 40623215 \n \n 40623220 \n \n 40623236 \n \n 40623247 \n \n 40623249 \n <<<<<<< HEAD <<<<<<< HEAD \n <<<<<<< HEAD \n ======= <<<<<<< HEAD >>>>>>> 52905516c8ef7f4b119c7500cc62d399a9037412 \n 40623250 \n ======= \n \n 40623250 \n <<<<<<< HEAD \n >>>>>>> cb0180577e3edb61eea986183a375236af56d96f \n ======= >>>>>>> cb0180577e3edb61eea986183a375236af56d96f >>>>>>> 52905516c8ef7f4b119c7500cc62d399a9037412 ======= \n \n 40623250 \n \n >>>>>>> bca17ba95137c0feb68b5b0bbd696c6907b3bf9b \n 40623251 \n 40423217', 'tags': '', 'url': '期中報告.html'}]};