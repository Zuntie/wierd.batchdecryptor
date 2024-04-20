const fs = require('fs')
const getFormattedDateTime = require('./formatDnT')

fs.readFile('out/output_2024-04-20_19-42-50.bat', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    let lines = data.split('\n');
    let variables = {};


    // Gets variables from the assembled code
    for (let line of lines) {

        if (line.startsWith('%MCDk%')) {
            let varNameValue = line.split('"')[1];
            variables[varNameValue.split('=')[0]] = varNameValue.split('=')[1];
        }
    }

    console.log(variables);

    let long_string = "%oTArlRjfuj%%DoogSzBhRC%%oAIuPPKoRo%%UhXfTOmzDl%%mGRvYSzKLx%%jEKbWOkfBv%%hVngpvrind%%mbEGpIInvW%%paCufpxVje%%EgXhdrsLfC%%ArwIkhadLn%%gXKEghsTaa%%YvZizgdwCY%%pWhTvYDUjY%%pukVYHwsbW%%YyLfEfsoie%%dDBNYjPRji%%ExJcKEldkR%%JKuFZQlboq%%GpLfULSxXO%%RFjTsAPIva%%TodrutiVNh%%YOCSBoMDiZ%%LOgvaeBBny%%bCGoxrluLB%%CXJQQdcrrd%%OlAwpeiHqq%%RHIofviouk%%drSGwNeqFW%%bjjjKQbkYs%%jDdvJVpvKv%%VOWhawtTZB%%aScuoIxyDp%%tYpcazoxXB%%xIFkbnncjn%%xikxsrBJgb%%xRRvbXyUgA%%iWWyermSsb%%uvppSlNSJJ%%YEqWeGRkie%%OsVIfBlMsb%%eIreGbBBCQ%%jGkxBDFaux%%AcJnnczGkr%%ZbzIFpnlpc%%epHsVhiygC%%VlsVAbZdRE%%BUrlQihBSl%%ptKrskvrsf%%TbzHvOJDhD%%qkuLAkXvBM%%aGGVmCBaCq%%GIKLKAuJQc%%zDtoVeZYRi%%nZPFfnuEuT%%mIbRWIAJbZ%%PnFznxmrZi%%DDjudGTeFw%%fPpWPQCCsm%%EpWRsZuprI%%adFmqJzGOq%%PvdFTZYJKx%%UKZMDnGsbd%%mDMXvckcGf%%rVNbximrXt%%aLFUNqdSId%%dhFKelIfjR%%OVcEfZWXpu%%aouIdAYSjf%%ZstCckpdXm%%AgigEeIaON%%tgDocOMXHD%%nQVdSwCABV%%JTZdUTgoeY%%SXdwMSPfAo%%ysvuZJkeoh%%CiyTdzgAtj%%IySJLpNzrZ%%HwZnxryFek%%IbZWvJzjsm%%MpLqFZzMJJ%%WLNpAfikwM%%aBviAGyWnb%%PDhenrLIIx%%RMVuoXoKvq%%BoNFlkTCQZ%%BDzITsDIbi%%uzCZVoGbUD%%rNAWzBQCSc%%yiSIWnmnAV%%uFImWbLNJW%%ERHnHNcCis%%CaPYKlGUcH%%bsBZjMfoax%%PcTVyGAFbj%%lKehstQJBK%%vRKbUlqIdV%%INBKDzhTAe%%KbSTwrntGP%%WvMpcXrRan%%qSBfBxiuES%%lWjxZtZRFD%%XWboZmbmHF%%iqTnNSzNsY%%iTPNEZlopJ%%YAlxptQngo%%wWMYKVcWJh%%TlyHvegnJZ%%aMWYHHevYt%%cmGeClgRcI%%WpEiPMcEbk%%nCDgnJaOqd%%RGXpeHEufj%%YplbcKiNiV%%FzuNgzIzQS%%krAZRpsodi%%hHzSlXrCeD%%AnFvyrmjjF%%YfDmYGOljM%%sTJaNXaBBi%%igvnrXLfAA%%difyjcdmTF%%jftrkHEFHA%%qLHaxRJqUb%%UJKIJkOkQL%%TNIWZcNdcK%%sgxaksAebs%%sNsRKzuKIa%%TuOWHCcKbu%%eGnjIOmKyr%%JJjysgvQmz%%HcucQYsAsH%%pPdGnMzijV%%nJmrqkkpEB%%gmyCMbllsK%%wLsQcTGClF%%GmHqlXQdLG%%NcVRAdrATl%%BoPyzCrvpw%%DIeYVUEhqO%%khzMWtPBpZ%%CfJZesxiRJ%%GvOocfXWWG%%ykjebtOdCf%%MQfqUyZfUC%%wwpHiPtlJQ%%wSFJAsVEXK%%DtGLWQqytE%%gRctkbUCWm%%aCuLJTlwPC%%CuhjYdQEKs%%zVReKEQlzz%%xtILKbZUcd%%ETJRbLKSuh%%lqRDMfLpae%%dZXpfjMvzX%%dVBHNFlZcZ%%UYRrohCeYF%%pJUXaFWtMS%%YoswdpOjQh%%TLnbkeiFbX%%HHwUIubDHh%%JSnkaFFuoY%%stoRLDwSNV%%xqrOlrRyOI%%olBIyaycaE%%zNqdFotFie%%YiQMKsByZJ%%NhGGJhRGsL%%ftRivKaoiX%%XmpKKfuOYg%%zZcrQshKty%%wNmxYEqHqa%%rnqcLBRWVE%%McImmgqArd%%CpUKAkZSLf%%PMyXOlIaGp%%AlOPLufakS%%nQpnxcsFCA%%BZkPPZEKxa%%xqUcDrAfYg%%fZHTRYwlAM%%TdyfNBaZaL%%PuCkuXWnJg%%BnHvvBrrYQ%%DtkKhuRPob%%qBfmqKxxyU%%cjBtlGvcJm%%kJajiwkRda%%fgYIPZhueL%%eUSdNtRQzB%%YPfcRHAVeU%%zFtyOVkTDl%%ybXYhpQXwO%%EurCbqbWQi%%ymqklyAuoR%%jYmncXRhUB%%QDzppfnRwy%%UocvMmLNMJ%%PvIEFFheze%%zTbprVMbUg%%kIXQXVWRAQ%%mdvlMvVVKK%%XjssYanMdR%%zKSFygyRGK%%IqDISvyPDW%%aQqkjaqFRW%%IkOJqClPMF%%WdoZbHGJAD%%CxjgRItIwy%%PTZKbyBTrq%%kIcXZWCrjC%%uGeoukaHSH%%jDtoQdeEXC%%fMrjsTvmgU%%gcyUdiOLpR%%yUbKhHpNhV%%SYtGwHpVVB%%POAXBhezlH%%psogelKHcL%%EHelciIRxw%%TTPOcJteia%%CPCzGzJmCk%%WHSjXhJpUt%%ymcONwDzeu%%SGzcjOfEFC%%ywpmzmaFRU%%adjPCpNNMj%%WkihsqiPai%%ceKsUbXPoB%%vXHjuOwJAT%%arSvGnohUj%%elFJSVtRUA%%rYzlNZDYND%%TyphiLmoLH%%NQVfwksYrz%%vEOZBcSHIH%%KptqpFWyAg%%JefnMBctOC%%HEHoioJpFf%%TEGeWyxFPR%%oTxkQryBna%%ZySgafHfib%%WGSuneybqo%%dxEXnNhwxQ%%PicFguMzeR%%QrxNVHbcXL%%SxkYWCTVSm%%XlHrlNEnoS%%sYXzyMaQcG%%LezMYsXdIE%%AQHRTEJfCh%%cNNetUALAk%%BdTmATMVtT%%PBFKsBqfFT%%dUoVDYrusd%%RmCycxXvqa%%SNMIrBidMR%%DufHhHOYJC%%BrDpbDYgHU%%EVOFaphFDb%%PnIAAwgVrv%%IZMNyBkxHO%%CbwRnHGAHR%%zjuHNoIcPE%%wdPmlEjagz%%eKXPyNRRnS%%QFozWzEeaj%%SiIcrzlkFI%%yFuhNPlFiZ%%xQOWOQPqpM%%aeaWGWcVyZ%%BHmEullgMh%%nZWaMbtLoA%%KVUSItExBQ%%NqgjxPEkCC%%FIEiyaiZjE%%DqGXpGNtWa%%GOEVtXSMDX%%xjiMVbqLuH%%kFnXnwJjTQ%%clnBVQeJOB%%ivwmhthUcn%%pbZoQbAHHX%%nJSMUlVHQe%%WHWSzOibQT%%pPgGAamYLU%%qxbRnyCKsV%%yAeYqIfgPb%%TzQOIyDmlT%%YWVWNzGeFa%%lyIUvOKhpS%%VgjKaRGnjO%%VqyyWBEikR%%baAOPuQWsT%%NvXsYSNlVW%%TtVRfVZkXT%%jCWyQUFuUG%%aKUpaAtfze%%OtmoXIfJJU%%uFYzJlyyBe%%ntroVjyFQF%%CULTeQpIAi%%OVKalvLuGP%%bUEuQvcXsO%%kzSerAUfuT%%VQXtprIqdA%%xdZbDHqqcJ%%OrqLXpdGIL%%BGaMUlWkez%%MLURrgzRAK%%kDcKfDzmva%%ocIsZRdnhs%%KfmCWcxyuR%%PlfYAXEpHr%%LKOdlKcCSA%%dmKiZerzNc%%fbRElcXKRb%%nNFPHarirm%%ZUGUNCBXZv%%GeBElJSkSi%%NsLQnpHUAY%%NihBdlvXQJ%%BZKvvimbEX%%hgqizGjPGx%%UGwaIyWaBZ%%oUtiHNHpve%%dGpCRGSZcw%%cFrsOVDKNX%%lmzFJmNhBL%%YTuCuoqTjb%%FXXeXJDatM%%kXCyTRgKTE%%SKxrxikOYA%%EJBMrnouHa%%JNNPAbqWIC%%iGaEiUzGHO%%yObThBvQgF%%DLdTVfWIQw%%SngvsXIWDw%%OHNSBULUHZ%%FAQdZwCgJc%%YRQlWlIGBj%%SzmKRVYksb%%tcaRQrxcvW%%uCnAyWRBWq%%lfsxggnfme%%xsOIJVQZuE%%NGkFOqlLlU%%dwncPnKCKK%%drQrycNFRC%%fShrCFVMIQ%%UCUraaeMSv%%lnpKAwQTgM%%CGUJPlpWzk%%sXUTPBxyqy%%XaNvrRDwRf%%PbFWnoIlCP%%KinHdntvVY%%YrDIOCTyrX%%ITetvqrXGB%%TmVANPNfse%%xhBSgxyXhL%%vjTFhRdTmN%%WvPufMwcVZ%%ONgnzAsmmX%%RuQUfKsqtW%%LUSEhbsgNu%%bwchWHdGfG%%zRGoVBFUov%%ufIZoUUBfx%%hlzSWvsIYy%%HLlNxUnEJF%%wySsaVNcTb%%MBBHynrOsz%%jWVQNIUVCu%%GqRzbJthSb%%IpPWLfkDoj%%CzlkwzCbEr%%bSAyvvJcFO%%TkVrRUhZeI%%xqGsSheHcC%%hrDAZQOrBp%%wiXzpsDUtB%%sDWVTKliGo%%qbZdHCGvrb%%fPxPmpshcz%%DkoBjEuHGp%%EGKnZujUSN%%LiDrwCfhJE%%sefgKgNyTd%%hZOcwzfkPR%%gyopOuGWfH%%zmXcXAADCS%%HKaPGLtBVW%%xUrSxTPQsq%%AQtmEUbMeW%%ZBHXkvyzIc%%aebikEUfEd%%KJlmsQrNlL%%KHwZWVnuHb%%vphppvPkcZ%%ZWiblqpvFt%%dKoXstIcmo%%rAyCIuBWWW%%bhLlLNzvNG%%GRPnYKbkXV%%NMYNIzyFtQ%%OtyIsWZdlE%%UmoFIzKkEX%%trZajojXCm%%pTbXSnshVb%%LYYsbAysfj%%Onawxxtxyd%%McAYoalqNu%%gDpClvsGZJ%%PQRsycSFAu%%TVJRpJxZda%%piFKckYykb%%eMyOnVliAm%%iFQsBlUxnC%%YsCYuHlgqn%%duvypgwUDt%%xpzRSJsmjR%%qAkHdMkzuG%%JeRnjNkrcu%%PaUUeITLgK%%pZWzWCjNuD%%WXzXJtxlIe%%zajPcqGqCu%%TytKrKhsrG%%DwXzxRAWkL%%lHcbkoPhxG%%WTkZKxEPFZ%%leUcBddJrk%%PJgRjlvrzc%%UaVKKKlXPZ%%nLrlzgNaAh%%lfQmRmNtQz%%cmqDeljjrR%%RgUrWdsUrc%%xuRrQPjITy%%WShqXbvNgo%%XDIIqflzqN%%TSbNbHuYMp%%cAqTUYZEtV%%IFNdfTLiaL%%DKrgEeRtoq%%GxaRmwnPOr%%gHgveoeYIh%%VlXbLsikpP%%hFpcolEWRI%%GWuJEWDWbp%%aTLgvuzZgU%%ndzYkArdgT%";

    // Replace the variable names in the long string with their corresponding values
    for (let varName in variables) {
        let varValue = variables[varName];
        let regex = new RegExp('%' + varName + '%', 'g');
        long_string = long_string.replaceAll(regex, varValue);
    }
    long_string = long_string.replace('	', '\n')


    let outputId = `out/assembled_${getFormattedDateTime()}`

    // Writes to the sh files for better viewing
    fs.writeFile(outputId + '.sh', long_string, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('The assembled code was saved!');
    });

    console.log(long_string);
})