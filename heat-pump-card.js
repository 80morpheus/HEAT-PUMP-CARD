
import {
  LitElement,
  html,
  css,
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";





class HeatPumpCard extends LitElement {
    
  static get properties() {    return {      hass: {},      config: {},    };  }
  setConfig(config) {
    if (!config.ww_oben) {      throw new Error("You need to define ww_oben");    }
    if (!config.ww_unten) {      throw new Error("You need to define ww_unten");    }
    
    
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {    return 3;  }
  
  
  
  render() {

  const ww_oben_Obj = this.hass.states[this.config.ww_oben];
    const ww_unten_Obj = this.hass.states[this.config.ww_unten];
    
    return html`
       
       <svg  width="100%" viewBox="0 0 1200 900">
<rect x="0" y="0" width="1200" height="900" style="fill:#333333"></rect>

 

########################################
###ECV
<polygon id="ecv" style="fill:lime;stroke:black;stroke-width:5;fill-rule:evenodd;" points=" 429,845 429,890 519,855 519,880 "></polygon>
###ECV
########################################


########################################
###VERDAMPFER
########################################
<rect id="verd_rect" rx="20" ry="20" width="140" height="250" style="fill:#cccccc;stroke:black;stroke-width:5;opacity:1" x="205" y="645"></rect>
########################################
<path id="verd_11" fill="none" stroke="#ffff00" stroke-width="6" d="M 235 665 c  20,5  20,10 0,15 "></path>
<path id="verd_12" fill="none" stroke="#e3e31b" stroke-width="6" d="M 235 680 c -20,5 -20,10 0,15 "></path>
<path id="verd_13" fill="none" stroke="#caca34" stroke-width="6" d="M 235 695 c  20,5  20,10 0,15 "></path>
<path id="verd_14" fill="none" stroke="#b1b14d" stroke-width="6" d="M 235 710 c -20,5 -20,10 0,15 "></path>
<path id="verd_15" fill="none" stroke="#989866" stroke-width="6" d="M 235 725 c  20,5  20,10 0,15 "></path>
<path id="verd_16" fill="none" stroke="#7f7f7f" stroke-width="6" d="M 235 740 c -20,5 -20,10 0,15 "></path>

<path id="verd_21" fill="none" stroke="#ffff00" stroke-width="6" d="M 275 665 c  20,5  20,10 0,15 "></path>
<path id="verd_22" fill="none" stroke="#e3e31b" stroke-width="6" d="M 275 680 c -20,5 -20,10 0,15 "></path>
<path id="verd_23" fill="none" stroke="#caca34" stroke-width="6" d="M 275 695 c  20,5  20,10 0,15 "></path>
<path id="verd_24" fill="none" stroke="#b1b14d" stroke-width="6" d="M 275 710 c -20,5 -20,10 0,15 "></path>
<path id="verd_25" fill="none" stroke="#989866" stroke-width="6" d="M 275 725 c  20,5  20,10 0,15 "></path>
<path id="verd_26" fill="none" stroke="#7f7f7f" stroke-width="6" d="M 275 740 c -20,5 -20,10 0,15 "></path>

<path id="verd_31" fill="none" stroke="#ffff00" stroke-width="6" d="M 315 665 c  20,5  20,10 0,15 "></path>
<path id="verd_32" fill="none" stroke="#e3e31b" stroke-width="6" d="M 315 680 c -20,5 -20,10 0,15 "></path>
<path id="verd_33" fill="none" stroke="#caca34" stroke-width="6" d="M 315 695 c  20,5  20,10 0,15 "></path>
<path id="verd_34" fill="none" stroke="#b1b14d" stroke-width="6" d="M 315 710 c -20,5 -20,10 0,15 "></path>
<path id="verd_35" fill="none" stroke="#989866" stroke-width="6" d="M 315 725 c  20,5  20,10 0,15 "></path>
<path id="verd_36" fill="none" stroke="#7f7f7f" stroke-width="6" d="M 315 740 c -20,5 -20,10 0,15 "></path>
##########################################
<text id="verd_text" text-anchor="middle" x="240" y="773"><tspan x="275">Verdampfer</tspan></text>
##########################################
<path id="verd_41" fill="none" stroke="#7f7f7f" stroke-width="6" d="M 235 785 c  20,5  20,10 0,15 "></path>
<path id="verd_42" fill="none" stroke="#666698" stroke-width="6" d="M 235 800 c -20,5 -20,10 0,15 "></path>
<path id="verd_43" fill="none" stroke="#4d4db1" stroke-width="6" d="M 235 815 c  20,5  20,10 0,15 "></path>
<path id="verd_44" fill="none" stroke="#3434ca" stroke-width="6" d="M 235 830 c -20,5 -20,10 0,15 "></path>
<path id="verd_45" fill="none" stroke="#1b1be3" stroke-width="6" d="M 235 845 c  20,5  20,10 0,15 "></path>
<path id="verd_46" fill="none" stroke="#0000ff" stroke-width="6" d="M 235 860 c -20,5 -20,10 0,15 "></path>

<path id="verd_51" fill="none" stroke="#7f7f7f" stroke-width="6" d="M 275 785 c  20,5  20,10 0,15 "></path>
<path id="verd_52" fill="none" stroke="#666698" stroke-width="6" d="M 275 800 c -20,5 -20,10 0,15 "></path>
<path id="verd_53" fill="none" stroke="#4d4db1" stroke-width="6" d="M 275 815 c  20,5  20,10 0,15 "></path>
<path id="verd_54" fill="none" stroke="#3434ca" stroke-width="6" d="M 275 830 c -20,5 -20,10 0,15 "></path>
<path id="verd_55" fill="none" stroke="#1b1be3" stroke-width="6" d="M 275 845 c  20,5  20,10 0,15 "></path>
<path id="verd_56" fill="none" stroke="#0000ff" stroke-width="6" d="M 275 860 c -20,5 -20,10 0,15 "></path>

<path id="verd_61" fill="none" stroke="#7f7f7f" stroke-width="6" d="M 315 785 c  20,5  20,10 0,15 "></path>
<path id="verd_62" fill="none" stroke="#666698" stroke-width="6" d="M 315 800 c -20,5 -20,10 0,15 "></path>
<path id="verd_63" fill="none" stroke="#4d4db1" stroke-width="6" d="M 315 815 c  20,5  20,10 0,15 "></path>
<path id="verd_64" fill="none" stroke="#3434ca" stroke-width="6" d="M 315 830 c -20,5 -20,10 0,15 "></path>
<path id="verd_65" fill="none" stroke="#1b1be3" stroke-width="6" d="M 315 845 c  20,5  20,10 0,15 "></path>
<path id="verd_66" fill="none" stroke="#0000ff" stroke-width="6" d="M 315 860 c -20,5 -20,10 0,15 "></path>
##########################################
###VERDAMPFER
##########################################



########################################
###VERFLÃœSSIGEN
########################################
<rect id="verf_rect" rx="20" ry="20" width="140" height="250" style="fill:#cccccc;stroke:black;stroke-width:5;opacity:1" x="605" y="645"></rect>
########################################
<path id="verf_11" fill="none" stroke="#ff0000" stroke-width="6" d="M 630 670 c 5,-10 10,-10 15,0 "></path>
<path id="verf_12" fill="none" stroke="#ff0000" stroke-width="6" d="M 645 670 c 5, 10 10, 10 15,0 "></path>
<path id="verf_13" fill="none" stroke="#ff0000" stroke-width="6" d="M 660 670 c 5,-10 10,-10 15,0 "></path>
<path id="verf_14" fill="none" stroke="#ff0000" stroke-width="6" d="M 675 670 c 5, 10 10, 10 15,0 "></path>
<path id="verf_15" fill="none" stroke="#ff0000" stroke-width="6" d="M 690 670 c 5,-10 10,-10 15,0 "></path>
<path id="verf_16" fill="none" stroke="#ff0000" stroke-width="6" d="M 705 670 c 5, 10 10, 10 15,0 "></path>

<path id="verf_21" fill="none" stroke="#ff3300" stroke-width="6" d="M 630 705 c 5,-10 10,-10 15,0 "></path>
<path id="verf_22" fill="none" stroke="#ff3300" stroke-width="6" d="M 645 705 c 5, 10 10, 10 15,0 "></path>
<path id="verf_23" fill="none" stroke="#ff3300" stroke-width="6" d="M 660 705 c 5,-10 10,-10 15,0 "></path>
<path id="verf_24" fill="none" stroke="#ff3300" stroke-width="6" d="M 675 705 c 5, 10 10, 10 15,0 "></path>
<path id="verf_25" fill="none" stroke="#ff3300" stroke-width="6" d="M 690 705 c 5,-10 10,-10 15,0 "></path>
<path id="verf_26" fill="none" stroke="#ff3300" stroke-width="6" d="M 705 705 c 5, 10 10, 10 15,0 "></path>

<path id="verf_31" fill="none" stroke="#ff6600" stroke-width="6" d="M 630 740 c 5,-10 10,-10 15,0 "></path>
<path id="verf_32" fill="none" stroke="#ff6600" stroke-width="6" d="M 645 740 c 5, 10 10, 10 15,0 "></path>
<path id="verf_33" fill="none" stroke="#ff6600" stroke-width="6" d="M 660 740 c 5,-10 10,-10 15,0 "></path>
<path id="verf_34" fill="none" stroke="#ff6600" stroke-width="6" d="M 675 740 c 5, 10 10, 10 15,0 "></path>
<path id="verf_35" fill="none" stroke="#ff6600" stroke-width="6" d="M 690 740 c 5,-10 10,-10 15,0 "></path>
<path id="verf_36" fill="none" stroke="#ff6600" stroke-width="6" d="M 705 740 c 5, 10 10, 10 15,0 "></path>
##########################################
<text id="verf_text" text-anchor="middle" x="636" y="773"><tspan x="675">Verflüssigen</tspan></text>
##########################################
<path id="verf_41" fill="none" stroke="#ff9900" stroke-width="6" d="M 630 800 c 5,-10 10,-10 15,0 "></path>
<path id="verf_42" fill="none" stroke="#ff9900" stroke-width="6" d="M 645 800 c 5, 10 10, 10 15,0 "></path>
<path id="verf_43" fill="none" stroke="#ff9900" stroke-width="6" d="M 660 800 c 5,-10 10,-10 15,0 "></path>
<path id="verf_44" fill="none" stroke="#ff9900" stroke-width="6" d="M 675 800 c 5, 10 10, 10 15,0 "></path>
<path id="verf_45" fill="none" stroke="#ff9900" stroke-width="6" d="M 690 800 c 5,-10 10,-10 15,0 "></path>
<path id="verf_46" fill="none" stroke="#ff9900" stroke-width="6" d="M 705 800 c 5, 10 10, 10 15,0 "></path>

<path id="verf_51" fill="none" stroke="#ffcc00" stroke-width="6" d="M 630 835 c 5,-10 10,-10 15,0 "></path>
<path id="verf_52" fill="none" stroke="#ffcc00" stroke-width="6" d="M 645 835 c 5, 10 10, 10 15,0 "></path>
<path id="verf_53" fill="none" stroke="#ffcc00" stroke-width="6" d="M 660 835 c 5,-10 10,-10 15,0 "></path>
<path id="verf_54" fill="none" stroke="#ffcc00" stroke-width="6" d="M 675 835 c 5, 10 10, 10 15,0 "></path>
<path id="verf_55" fill="none" stroke="#ffcc00" stroke-width="6" d="M 690 835 c 5,-10 10,-10 15,0 "></path>
<path id="verf_56" fill="none" stroke="#ffcc00" stroke-width="6" d="M 705 835 c 5, 10 10, 10 15,0 "></path>

<path id="verf_61" fill="none" stroke="#ffff00" stroke-width="6" d="M 630 870 c 5,-10 10,-10 15,0 "></path>
<path id="verf_62" fill="none" stroke="#ffff00" stroke-width="6" d="M 645 870 c 5, 10 10, 10 15,0 "></path>
<path id="verf_63" fill="none" stroke="#ffff00" stroke-width="6" d="M 660 870 c 5,-10 10,-10 15,0 "></path>
<path id="verf_64" fill="none" stroke="#ffff00" stroke-width="6" d="M 675 870 c 5, 10 10, 10 15,0 "></path>
<path id="verf_65" fill="none" stroke="#ffff00" stroke-width="6" d="M 690 870 c 5,-10 10,-10 15,0 "></path>
<path id="verf_66" fill="none" stroke="#ffff00" stroke-width="6" d="M 705 870 c 5, 10 10, 10 15,0 "></path>
##########################################
###VERFLÃœSSIGEN
##########################################

 

 

 

########################################
###Warmwasser
########################################
<rect id="ww_rect" rx="20" ry="20" width="140" height="250" style="fill:#cccccc;stroke:black;stroke-width:5;opacity:1" x="855" y="185"></rect>
########################################
<path id="ww_11" fill="none" stroke="#ff0000" stroke-width="6" d="M 880 210 c 5,-10 10,-10 15,0 "></path>
<path id="ww_12" fill="none" stroke="#ff0000" stroke-width="6" d="M 895 210 c 5, 10 10, 10 15,0 "></path>
<path id="ww_13" fill="none" stroke="#ff0000" stroke-width="6" d="M 910 210 c 5,-10 10,-10 15,0 "></path>
<path id="ww_14" fill="none" stroke="#ff0000" stroke-width="6" d="M 925 210 c 5, 10 10, 10 15,0 "></path>
<path id="ww_15" fill="none" stroke="#ff0000" stroke-width="6" d="M 940 210 c 5,-10 10,-10 15,0 "></path>
<path id="ww_16" fill="none" stroke="#ff0000" stroke-width="6" d="M 955 210 c 5, 10 10, 10 15,0 "></path>

<text id="ww_oben" text-anchor="middle" x="886" y="237">
<tspan x="925">   
${this.config.ww_oben}
</tspan>
</text>

<path id="ww_21" fill="none" stroke="#ff3300" stroke-width="6" d="M 880 255 c 5,-10 10,-10 15,0 "></path>
<path id="ww_22" fill="none" stroke="#ff3300" stroke-width="6" d="M 895 255 c 5, 10 10, 10 15,0 "></path>
<path id="ww_23" fill="none" stroke="#ff3300" stroke-width="6" d="M 910 255 c 5,-10 10,-10 15,0 "></path>
<path id="ww_24" fill="none" stroke="#ff3300" stroke-width="6" d="M 925 255 c 5, 10 10, 10 15,0 "></path>
<path id="ww_25" fill="none" stroke="#ff3300" stroke-width="6" d="M 940 255 c 5,-10 10,-10 15,0 "></path>
<path id="ww_26" fill="none" stroke="#ff3300" stroke-width="6" d="M 955 255 c 5, 10 10, 10 15,0 "></path>
##########################################
<text id="ww_text" text-anchor="middle" x="886" y="285"><tspan x="925">Warmwasser</tspan></text>
##########################################
<path id="ww_31" fill="none" stroke="#ff6600" stroke-width="6" d="M 880 305 c 5,-10 10,-10 15,0 "></path>
<path id="ww_32" fill="none" stroke="#ff6600" stroke-width="6" d="M 895 305 c 5, 10 10, 10 15,0 "></path>
<path id="ww_33" fill="none" stroke="#ff6600" stroke-width="6" d="M 910 305 c 5,-10 10,-10 15,0 "></path>
<path id="ww_34" fill="none" stroke="#ff6600" stroke-width="6" d="M 925 305 c 5, 10 10, 10 15,0 "></path>
<path id="ww_35" fill="none" stroke="#ff6600" stroke-width="6" d="M 940 305 c 5,-10 10,-10 15,0 "></path>
<path id="ww_36" fill="none" stroke="#ff6600" stroke-width="6" d="M 955 305 c 5, 10 10, 10 15,0 "></path>

<path id="ww_41" fill="none" stroke="#ff9900" stroke-width="6" d="M 880 335 c 5,-10 10,-10 15,0 "></path>
<path id="ww_42" fill="none" stroke="#ff9900" stroke-width="6" d="M 895 335 c 5, 10 10, 10 15,0 "></path>
<path id="ww_43" fill="none" stroke="#ff9900" stroke-width="6" d="M 910 335 c 5,-10 10,-10 15,0 "></path>
<path id="ww_44" fill="none" stroke="#ff9900" stroke-width="6" d="M 925 335 c 5, 10 10, 10 15,0 "></path>
<path id="ww_45" fill="none" stroke="#ff9900" stroke-width="6" d="M 940 335 c 5,-10 10,-10 15,0 "></path>
<path id="ww_46" fill="none" stroke="#ff9900" stroke-width="6" d="M 955 335 c 5, 10 10, 10 15,0 "></path>

<text id="ww_unten" text-anchor="middle" x="886" y="365">
<tspan x="925"> 
${this.config.ww_unten}
</tspan>   
</text>
##########################################
<line id="ww_51" stroke="#ff0000" stroke-width="6" x1="855" x2="970" y1="375" y2="375"></line>
<path id="ww_52" fill="none" stroke="#e6001a" stroke-width="6" d="M 970 375 c 10,0 10,10 0,10 "></path>
<line id="ww_53" stroke="#cd0037" stroke-width="6" x1="970" x2="880" y1="385" y2="385"></line>
<path id="ww_54" fill="none" stroke="#b40050" stroke-width="6" d="M 880 385 c -10,0 -10,10 0,10 "></path>
<line id="ww_55" stroke="#9b0069" stroke-width="6" x1="880" x2="970" y1="395" y2="395"></line>
<path id="ww_56" fill="none" stroke="#820082" stroke-width="6" d="M 970 395 c 10,0 10,10 0,10 "></path>
<line id="ww_57" stroke="#69009b" stroke-width="6" x1="970" x2="880" y1="405" y2="405"></line>
<path id="ww_58" fill="none" stroke="#5000b4" stroke-width="6" d="M 880 405 c -10,0 -10,10 0,10 "></path>
<line id="ww_59" stroke="#3700cd" stroke-width="6" x1="880" x2="970" y1="415" y2="415"></line>
<path id="ww_60" fill="none" stroke="#1a00e6" stroke-width="6" d="M 970 415 c 10,0 10,10 0,10 "></path>
<line id="ww_61" stroke="#0000ff" stroke-width="6" x1="855" x2="970" y1="425" y2="425"></line>
##########################################
###Warmwasser
##########################################


##########################################
### VENTILATOR
##########################################
######ventilator absolut werte       
###
###path d="m  12,  0  C   6, 31   6, 62  31, 56 C  32, 56  37, 55  50, 48 C  62, 40  62, 37  52, 35 C  44, 31  31, 25  31,  0" /&gt;            

<defs>
<linearGradient id="vent_lin_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:rgb(0,0,200); stop-opacity:1"></stop>
             <stop offset="60%" style="stop-color:rgb(200,200,255); stop-opacity:1"></stop>
</linearGradient>
<radialGradient id="vent_rad_grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
           <stop offset="0%" style="stop-color:rgb(200,200,255); stop-opacity:1"></stop>
           <stop offset="80%" style="stop-color:rgb(0,0,200); stop-opacity:1"></stop>
</radialGradient>
</defs>            
    <path id="vent_o" transform="rotate(180 88 768 )" stroke="black" stroke-width="2" fill="url(#vent_lin_grad)" d="m 80,778 c  -6, 31  -6, 62  19, 56 c   1,  0   6, -1  19, -8 c  12, -8  12,-11   2,-13 c  -8, -4 -21,-10 -21,-35"></path>            
<path id="vent_u" transform="rotate(  0 88 768 )" stroke="black" stroke-width="2" fill="url(#vent_lin_grad)" d="m 80,778 c  -6, 31  -6, 62  19, 56 c   1,  0   6, -1  19, -8 c  12, -8  12,-11   2,-13 c  -8, -4 -21,-10 -21,-35"></path>
<path id="vent_l" transform="rotate( 90 88 768 )" stroke="black" stroke-width="2" fill="url(#vent_lin_grad)" d="m 80,778 c  -6, 31  -6, 62  19, 56 c   1,  0   6, -1  19, -8 c  12, -8  12,-11   2,-13 c  -8, -4 -21,-10 -21,-35"></path>
<path id="vent_r" transform="rotate(270 88 768 )" stroke="black" stroke-width="2" fill="url(#vent_lin_grad)" d="m 80,778 c  -6, 31  -6, 62  19, 56 c   1,  0   6, -1  19, -8 c  12, -8  12,-11   2,-13 c  -8, -4 -21,-10 -21,-35"></path>  
 <circle id="vent_m" cx="88" cy="768" r="15" stroke="black" stroke-width="2" fill="url(#vent_rad_grad)"></circle>
#########################################
### VENTILATOR
##########################################
       


########################################
###PUFFERSPEICHER
########################################
<rect id="puf_rect" rx="20" ry="20" width="140" height="300" style="fill:#cccccc;stroke:black;stroke-width:5;opacity:1" x="505" y="135"></rect>
########################################
<path id="puf_11" fill="none" stroke="#ff0000" stroke-width="6" d="M 530 160 c 5,-10 10,-10 15,0 "></path>
<path id="puf_12" fill="none" stroke="#ff0000" stroke-width="6" d="M 545 160 c 5, 10 10, 10 15,0 "></path>
<path id="puf_13" fill="none" stroke="#ff0000" stroke-width="6" d="M 560 160 c 5,-10 10,-10 15,0 "></path>
<path id="puf_14" fill="none" stroke="#ff0000" stroke-width="6" d="M 575 160 c 5, 10 10, 10 15,0 "></path>
<path id="puf_15" fill="none" stroke="#ff0000" stroke-width="6" d="M 590 160 c 5,-10 10,-10 15,0 "></path>
<path id="puf_16" fill="none" stroke="#ff0000" stroke-width="6" d="M 605 160 c 5, 10 10, 10 15,0 "></path>

<path id="puf_21" fill="none" stroke="#ff3300" stroke-width="6" d="M 530 195 c 5,-10 10,-10 15,0 "></path>
<path id="puf_22" fill="none" stroke="#ff3300" stroke-width="6" d="M 545 195 c 5, 10 10, 10 15,0 "></path>
<path id="puf_23" fill="none" stroke="#ff3300" stroke-width="6" d="M 560 195 c 5,-10 10,-10 15,0 "></path>
<path id="puf_24" fill="none" stroke="#ff3300" stroke-width="6" d="M 575 195 c 5, 10 10, 10 15,0 "></path>
<path id="puf_25" fill="none" stroke="#ff3300" stroke-width="6" d="M 590 195 c 5,-10 10,-10 15,0 "></path>
<path id="puf_26" fill="none" stroke="#ff3300" stroke-width="6" d="M 605 195 c 5, 10 10, 10 15,0 "></path>

<path id="puf_31" fill="none" stroke="#ff6600" stroke-width="6" d="M 530 230 c 5,-10 10,-10 15,0 "></path>
<path id="puf_32" fill="none" stroke="#ff6600" stroke-width="6" d="M 545 230 c 5, 10 10, 10 15,0 "></path>
<path id="puf_33" fill="none" stroke="#ff6600" stroke-width="6" d="M 560 230 c 5,-10 10,-10 15,0 "></path>
<path id="puf_34" fill="none" stroke="#ff6600" stroke-width="6" d="M 575 230 c 5, 10 10, 10 15,0 "></path>
<path id="puf_35" fill="none" stroke="#ff6600" stroke-width="6" d="M 590 230 c 5,-10 10,-10 15,0 "></path>
<path id="puf_36" fill="none" stroke="#ff6600" stroke-width="6" d="M 605 230 c 5, 10 10, 10 15,0 "></path>
##########################################
<text id="puf_text" text-anchor="middle" x="536" y="263"><tspan x="575"> Pufferspeicher</tspan></text>
##########################################
<path id="puf_41" fill="none" stroke="#ff9900" stroke-width="6" d="M 530 290 c 5,-10 10,-10 15,0 "></path>
<path id="puf_42" fill="none" stroke="#ff9900" stroke-width="6" d="M 545 290 c 5, 10 10, 10 15,0 "></path>
<path id="puf_43" fill="none" stroke="#ff9900" stroke-width="6" d="M 560 290 c 5,-10 10,-10 15,0 "></path>
<path id="puf_44" fill="none" stroke="#ff9900" stroke-width="6" d="M 575 290 c 5, 10 10, 10 15,0 "></path>
<path id="puf_45" fill="none" stroke="#ff9900" stroke-width="6" d="M 590 290 c 5,-10 10,-10 15,0 "></path>
<path id="puf_46" fill="none" stroke="#ff9900" stroke-width="6" d="M 605 290 c 5, 10 10, 10 15,0 "></path>
##########################################
<text id="puf_temp" text-anchor="middle" x="556" y="320">
<tspan x="575">   
77,6 °C
</tspan>
</text>
##########################################
<path id="puf_51" fill="none" stroke="#ffcc00" stroke-width="6" d="M 530 340 c 5,-10 10,-10 15,0 "></path>
<path id="puf_52" fill="none" stroke="#ffcc00" stroke-width="6" d="M 545 340 c 5, 10 10, 10 15,0 "></path>
<path id="puf_53" fill="none" stroke="#ffcc00" stroke-width="6" d="M 560 340 c 5,-10 10,-10 15,0 "></path>
<path id="puf_54" fill="none" stroke="#ffcc00" stroke-width="6" d="M 575 340 c 5, 10 10, 10 15,0 "></path>
<path id="puf_55" fill="none" stroke="#ffcc00" stroke-width="6" d="M 590 340 c 5,-10 10,-10 15,0 "></path>
<path id="puf_56" fill="none" stroke="#ffcc00" stroke-width="6" d="M 605 340 c 5, 10 10, 10 15,0 "></path>

<path id="puf_61" fill="none" stroke="#ffff00" stroke-width="6" d="M 530 375 c 5,-10 10,-10 15,0 "></path>
<path id="puf_62" fill="none" stroke="#ffff00" stroke-width="6" d="M 545 375 c 5, 10 10, 10 15,0 "></path>
<path id="puf_63" fill="none" stroke="#ffff00" stroke-width="6" d="M 560 375 c 5,-10 10,-10 15,0 "></path>
<path id="puf_64" fill="none" stroke="#ffff00" stroke-width="6" d="M 575 375 c 5, 10 10, 10 15,0 "></path>
<path id="puf_65" fill="none" stroke="#ffff00" stroke-width="6" d="M 590 375 c 5,-10 10,-10 15,0 "></path>
<path id="puf_66" fill="none" stroke="#ffff00" stroke-width="6" d="M 605 375 c 5, 10 10, 10 15,0 "></path>

<path id="puf_71" fill="none" stroke="#ffff00" stroke-width="6" d="M 530 410 c 5,-10 10,-10 15,0 "></path>
<path id="puf_72" fill="none" stroke="#ffff00" stroke-width="6" d="M 545 410 c 5, 10 10, 10 15,0 "></path>
<path id="puf_73" fill="none" stroke="#ffff00" stroke-width="6" d="M 560 410 c 5,-10 10,-10 15,0 "></path>
<path id="puf_74" fill="none" stroke="#ffff00" stroke-width="6" d="M 575 410 c 5, 10 10, 10 15,0 "></path>
<path id="puf_75" fill="none" stroke="#ffff00" stroke-width="6" d="M 590 410 c 5,-10 10,-10 15,0 "></path>
<path id="puf_76" fill="none" stroke="#ffff00" stroke-width="6" d="M 605 410 c 5, 10 10, 10 15,0 "></path>
##########################################
###PUFFERSPEICHER
##########################################


########################################
###HAUS
########################################
<rect id="haus_rect" rx="0" ry="0" width="200" height="250" style="fill:#cccccc;stroke:black;stroke-width:5;opacity:1" x="80" y="125"></rect>
<path id="haus_drei" style="fill:#cccccc;stroke:black;stroke-width:5;opacity:1" d="M 180,25 l -125,100 l 250,0 Z"></path>
<line id="haus_11" stroke="#ff0000" stroke-width="6" x1="230" x2="280" y1="325" y2="325"></line>
<line id="haus_12" stroke="#ff0000" stroke-width="6" x1="230" x2="230" y1="325" y2="175"></line>
<path id="haus_13" fill="none" stroke="#e6001a" stroke-width="6" d="M 230 175 c 0,-20 -20,-20 -20,0 "></path>
<line id="haus_14" stroke="#cd0037" stroke-width="6" x1="210" x2="210" y1="325" y2="175"></line>
<path id="haus_15" fill="none" stroke="#b40050" stroke-width="6" d="M 210 325 c 0,20 -20,20 -20,0 "></path>
<line id="haus_16" stroke="#9b0069" stroke-width="6" x1="190" x2="190" y1="325" y2="175"></line>
<path id="haus_17" fill="none" stroke="#820082" stroke-width="6" d="M 190 175 c 0,-20 -20,-20 -20,0 "></path>
<line id="haus_18" stroke="#69009b" stroke-width="6" x1="170" x2="170" y1="325" y2="175"></line>
<path id="haus_19" fill="none" stroke="#5000b4" stroke-width="6" d="M 170 325 c 0,20 -20,20 -20,0 "></path>
<line id="haus_20" stroke="#3700cd" stroke-width="6" x1="150" x2="150" y1="325" y2="175"></line>
<path id="haus_21" fill="none" stroke="#1a00e6" stroke-width="6" d="M 150 175 c 0,-20 -20,-20 -20,0 "></path>
<line id="haus_22" stroke="#0000ff" stroke-width="6" x1="130" x2="130" y1="325" y2="175"></line>
<line id="haus_23" stroke="#0000ff" stroke-width="6" x1="80" x2="130" y1="325" y2="325"></line>
########################################
###HAUS
########################################


########################################
###ECV
<path id="usv_1" style="fill:grey;stroke:black;stroke-width:5;" d="M 795,550 l -40, 20 l   0,-40 Z "></path>
<path id="usv_2" style="fill:grey;stroke:black;stroke-width:5;" d="M 800,545 l -20,-40 l  40,  0 Z "></path>
<path id="usv_3" style="fill:grey;stroke:black;stroke-width:5;" d="M 800,555 l  20, 40 l -40,  0 Z "></path>
###ECV
########################################


########################################
### PUMPE ZIRKULATION
<circle id="pump_zl_1" r="40" style="fill:grey;stroke:black;stroke-width:5;" cx="1095" cy="265"></circle>
<line id="pump_zl_2" style="stroke:black;stroke-width:5;" x1="1065" x2="1135" y1="235" y2="265" transform="rotate(180 1095 265 )"></line>
<line id="pump_zl_3" style="stroke:black;stroke-width:5;" x1="1065" x2="1135" y1="295" y2="265" transform="rotate(180 1095 265 )"></line>
### PUMPE ZIRULATION
########################################


########################################
### PUMPE SEKUNDÃ„R
<circle id="pump_sec_1" r="40" style="fill:grey;stroke:black;stroke-width:5;" cx="835" cy="795"></circle>
<line id="pump_sec_2" style="stroke:black;stroke-width:5;" x1="805" x2="875" y1="765" y2="795" transform="rotate( 90 835 795 )"></line>
<line id="pump_sec_3" style="stroke:black;stroke-width:5;" x1="805" x2="875" y1="825" y2="795" transform="rotate( 90 835 795 )"></line>
### PUMPE SEKUNDÃ„R
########################################


########################################
### PUMPE HEIZUNG
<circle id="pump_he_1" r="40" style="fill:grey;stroke:black;stroke-width:5;" cx="395" cy="245"></circle>
<line id="pump_he_2" style="stroke:black;stroke-width:5;" x1="365" x2="435" y1="215" y2="245" transform="rotate( 90 395 245 )"></line>
<line id="pump_he_3" style="stroke:black;stroke-width:5;" x1="365" x2="435" y1="275" y2="245" transform="rotate( 90 395 245 )"></line>
### PUMPE HEIZUNG
########################################



########################################
### VERDICHTER
<circle id="komp_1" r="40" style="fill:grey;stroke:black;stroke-width:5;" cx="474" cy="680"></circle>
<line id="komp_2" style="stroke:black;stroke-width:5;" x1="444" x2="514" y1="650" y2="670" transform="rotate(  0 474 680 )"></line>
<line id="komp_3" style="stroke:black;stroke-width:5;" x1="444" x2="514" y1="710" y2="690" transform="rotate(  0 474 680 )"></line>
### VERDICHTER
########################################



########################################
### LINIEN

<line id="verd_komp" x1="348" y1="680" x2="432" y2="680" style="stroke:yellow;stroke-width:5;"></line>
<line id="komp_verf" x1="516" y1="680" x2="602" y2="680" style="stroke:red;stroke-width:5;"></line>
<line id="verf_ecv" x1="348" y1="870" x2="427" y2="870" style="stroke:blue;stroke-width:5;"></line>
<line id="ecv_verd" x1="521" y1="870" x2="602" y2="870" style="stroke:yellow;stroke-width:5;"></line>

<line id="verf_vent_1" x1="748" y1="680" x2="802" y2="680" style="stroke:red;stroke-width:5;"></line>
<line id="verf_vent_2" x1="802" y1="680" x2="802" y2="598" style="stroke:red;stroke-width:5;"></line>
<line id="vent_ww_1" x1="802" y1="502" x2="802" y2="375" style="stroke:red;stroke-width:5;"></line>
<line id="vent_ww_2" x1="800" y1="375" x2="857" y2="375" style="stroke:red;stroke-width:5;"></line>
<line id="vent_puf_1" x1="702" y1="552" x2="702" y2="150" style="stroke:red;stroke-width:5;"></line>
<line id="vent_puf_2" x1="645" y1="150" x2="700" y2="150" style="stroke:red;stroke-width:5;"></line>
<line id="vent_puf_3" x1="702" y1="552" x2="752" y2="552" style="stroke:red;stroke-width:5;"></line>

<line id="verf_sec_1" x1="748" y1="870" x2="835" y2="870" style="stroke:blue;stroke-width:5;"></line>
<line id="verf_sec_2" x1="835" y1="838" x2="835" y2="872" style="stroke:blue;stroke-width:5;"></line>
<line id="sec_puf_ww_1" x1="835" y1="753" x2="835" y2="425" style="stroke:blue;stroke-width:5;"></line>
<line id="sec_puf_ww_2" x1="643" y1="425" x2="857" y2="425" style="stroke:blue;stroke-width:5;"></line>

<line id="puf_haus_1" x1=" 30" y1="425" x2="507" y2="425" style="stroke:blue;stroke-width:5;"></line>
<line id="puf_haus_2" x1=" 30" y1="325" x2=" 30" y2="425" style="stroke:blue;stroke-width:5;"></line>
<line id="puf_haus_3" x1=" 30" y1="325" x2=" 82" y2="325" style="stroke:blue;stroke-width:5;"></line>

<line id="haus_hkp_1" x1="280" y1="325" x2="396" y2="325" style="stroke:red;stroke-width:5;"></line>
<line id="haus_hkp_1" x1="396" y1="287" x2="396" y2="325" style="stroke:red;stroke-width:5;"></line>
<line id="puf_hkp_1" x1="396" y1="150" x2="396" y2="202" style="stroke:red;stroke-width:5;"></line>
<line id="puf_hkp_2" x1="396" y1="150" x2="505" y2="150" style="stroke:red;stroke-width:5;"></line>

<line id="ww_1" x1="995" y1="200" x2="1200" y2="200" style="stroke:red;stroke-width:5;"></line>
<line id="ww_2" x1="998" y1="265" x2="1052" y2="265" style="stroke:orange;stroke-width:5;"></line>
<line id="ww_2" x1="1138" y1="265" x2="1200" y2="265" style="stroke:orange;stroke-width:5;"></line>
<line id="ww_3" x1="995" y1="425" x2="1200" y2="425" style="stroke:blue;stroke-width:5;"></line>

### LINIEN
########################################

</svg>
       
    `;
  }






}
customElements.define("heat-pump-card", HeatPumpCard);
