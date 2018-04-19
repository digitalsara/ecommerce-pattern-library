(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {};

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const correctHrefPaths = function (html) {
    const hrefSearch = /href\s*=\s*"\.\.\/\.\.\//g;
    const srcSearch = /src\s*=\s*"\.\.\/\.\.\//g;
    const urlSearch = /url\((["']*)\.\.\/\.\.\//g;

    return html
      .replace(hrefSearch, 'href="../')
      .replace(srcSearch, 'src="../')
      .replace(urlSearch, 'url($1../')
    ;
  };

  const buildAccurateSelectorFromElem = function (elem) {
    let theSelector = elem.tagName.toLowerCase();

    if (elem.id) theSelector += `#${elem.id}`;
    if (elem.getAttribute('role')) theSelector += `[role="${elem.getAttribute('role')}"]`;
    if (elem.classList.length > 0) theSelector += `.${[].join.call(elem.classList, '.')}`;

    theSelector += ':first-of-type';

    return theSelector;
  };

  /**
   * This is an ugly mess: Blink does not properly render SVGs when using DOMParser alone.
   * But, I need DOMParser to determine the correct element to extract.
   *
   * I only want to get the first element within the `<body>` tag of the loaded document.
   * This dumps the whole, messy, HTML document into a temporary `<div>`,
   * then uses the DOMParser version, of the same element, to create an accurate selector,
   * then finds that single element in the temporary `<div>` using the selector and returns it.
   */
  const htmlStringToElem = function (html) {
    let theSelector = '';
    const tmpDoc = document.createElement('div');
    const finalTmpDoc = document.createElement('div');
    const doc = (new DOMParser()).parseFromString(html, 'text/html');

    tmpDoc.innerHTML = html;
    theSelector = buildAccurateSelectorFromElem(doc.body.firstElementChild);
    finalTmpDoc.appendChild(tmpDoc.querySelector(theSelector));

    return finalTmpDoc;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(correctHrefPaths(patternDetails.html));
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    let allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot locate pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library
 * @version 1524144272080
 */
const patternManifest_1524144272079 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 6,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 9,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 9,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,6,25,0,0;m,9,38,1,1;l,9,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.125
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.125
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.125
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.125
      }
    ],
    "typografierUrl": "0,100,1.3,1.125,0;38,110,1.4,1.125,1;60,120,1.5,1.125,1;90,130,1.5,1.125,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#858740",
            "hex": "#858740",
            "rgba": "rgba(133, 135, 64, 1)"
          },
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#f0f0e9",
            "hex": "#f0f0e9",
            "rgba": "rgba(240, 240, 233, 1)"
          }
        ],
        "secondary": [
          {
            "name": "--color-secondary",
            "namePretty": "Secondary",
            "raw": "#956672",
            "hex": "#956672",
            "rgba": "rgba(149, 102, 114, 1)"
          }
        ],
        "neutral": [],
        "accent": [
          {
            "name": "--color-base-dark",
            "namePretty": "Base dark",
            "raw": "#332a2d",
            "hex": "#332a2d",
            "rgba": "rgba(51, 42, 45, 1)"
          },
          {
            "name": "--color-base-light",
            "namePretty": "Base light",
            "raw": "#efeeef",
            "hex": "#efeeef",
            "rgba": "rgba(239, 238, 239, 1)"
          },
          {
            "name": "--color-base-dark-intense",
            "namePretty": "Base dark intense",
            "raw": "#391414",
            "hex": "#391414",
            "rgba": "rgba(57, 20, 20, 1)"
          },
          {
            "name": "--color-detail",
            "namePretty": "Detail",
            "raw": "#6cc9a1",
            "hex": "#6cc9a1",
            "rgba": "rgba(108, 201, 161, 1)"
          },
          {
            "name": "--color-accent",
            "namePretty": "Accent",
            "raw": "#3bcfd3",
            "hex": "#3bcfd3",
            "rgba": "rgba(59, 207, 211, 1)"
          },
          {
            "name": "--color-error",
            "namePretty": "Error",
            "raw": "#e1577a",
            "hex": "#e1577a",
            "rgba": "rgba(225, 87, 122, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Quicksand",
          "raw": "quicksand, sans-serif",
          "weights": {
            "500": {
              "weight": "500",
              "hasNormal": true,
              "hasItalic": false
            },
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "secondary": {
          "name": "--font-secondary",
          "namePretty": "Hind Vadodara",
          "raw": "\"hind vadodara\", sans-serif",
          "weights": {
            "500": {
              "weight": "500",
              "hasNormal": true,
              "hasItalic": false
            },
            "600": {
              "weight": "600",
              "hasNormal": true,
              "hasItalic": false
            },
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": false
            }
          }
        },
        "accent": []
      },
      "coloursRaw": {
        "--color-primary": "#858740",
        "--color-primary-light": "#f0f0e9",
        "--color-secondary": "#956672",
        "--color-base-dark": "#332a2d",
        "--color-base-light": "#efeeef",
        "--color-base-dark-intense": "#391414",
        "--color-detail": "#6cc9a1",
        "--color-accent": "#3bcfd3",
        "--color-error": "#e1577a"
      },
      "fontsRaw": {
        "--font-primary": "quicksand, sans-serif",
        "--font-secondary": "\"hind vadodara\", sans-serif"
      }
    },
    "readme": {
      "attributes": {
        "name": "zenharmony",
        "fontUrl": "https://fonts.googleapis.com/css?family=Hind+Vadodara:400,500,600|Quicksand:400,500",
        "backgroundColour": "#fff",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      },
      "bodyRaw": "In zenharmony we believe that what you think you become, what you feel you attract and what you imagine you create. We hope that we can make the world a better and stress-free place through our products which connect you to Nature and bring harmony and completeness to your life.\n",
      "bodyBasic": "In zenharmony we believe that what you think you become, what you feel you attract and what you imagine you create. We hope that we can make the world a better and stress-free place through our products which connect you to Nature and bring harmony and completeness to your life."
    },
    "icons": [
      "alert",
      "arrow-next",
      "arrow-drop",
      "arrow-previous",
      "delete",
      "icon-account",
      "icon-cart",
      "icon-currency",
      "icon-nav",
      "icon-nav-close",
      "icon-search",
      "rating-full",
      "rating",
      "social-facebook",
      "social-instagram",
      "social-pinterest",
      "social-twitter"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/images/logo-256.svg",
      "size64": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/images/logo-64.svg",
      "size32": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/images/logo-32.svg",
      "size16": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/images/logo-16.svg",
      "size16Local": "logo-16.svg",
      "sizeLargeLocal": "logo-256.svg",
      "size32Local": "logo-32.svg",
      "size64Local": "logo-64.svg"
    },
    "patterns": [
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/banners",
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons",
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards",
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms",
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/header-footer",
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation",
      "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections"
    ],
    "pages": [
      {
        "name": "cart.html",
        "namePretty": "Cart",
        "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/pages/cart.html"
      },
      {
        "name": "checkout.html",
        "namePretty": "Checkout",
        "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/pages/checkout.html"
      },
      {
        "name": "home.html",
        "namePretty": "Home",
        "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/pages/home.html"
      },
      {
        "name": "product-details.html",
        "namePretty": "Product details",
        "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/pages/product-details.html"
      },
      {
        "name": "product-list.html",
        "namePretty": "Product list",
        "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/pages/product-list.html"
      }
    ]
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/banners",
      "html": [
        {
          "name": "banner-action",
          "namePretty": "Banner action",
          "filename": "banner-action",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/banners/banner-action.html",
          "localPath": "patterns/banners/banner-action.html",
          "readme": {}
        },
        {
          "name": "banner",
          "namePretty": "Banner",
          "filename": "banner",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/banners/banner.html",
          "localPath": "patterns/banners/banner.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/banners/README.md",
          "localPath": "patterns/banners/README.md"
        }
      ],
      "css": [
        {
          "name": "banners",
          "namePretty": "Banners",
          "filename": "banners",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/banners/banners.css",
          "localPath": "patterns/banners/banners.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "button-ghost",
          "namePretty": "Button ghost",
          "filename": "button-ghost",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons/button-ghost.html",
          "localPath": "patterns/buttons/button-ghost.html",
          "readme": {}
        },
        {
          "name": "button-strong",
          "namePretty": "Button strong",
          "filename": "button-strong",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons/button-strong.html",
          "localPath": "patterns/buttons/button-strong.html",
          "readme": {}
        },
        {
          "name": "button",
          "namePretty": "Button",
          "filename": "button",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons/button.html",
          "localPath": "patterns/buttons/button.html",
          "readme": {}
        },
        {
          "name": "buttons-on-dark",
          "namePretty": "Buttons on dark",
          "filename": "buttons-on-dark",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons/buttons-on-dark.html",
          "localPath": "patterns/buttons/buttons-on-dark.html",
          "readme": {
            "backgroundColor": "#332a2d",
            "backgroundColour": "#332a2d",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "filename": "buttons",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "checkout-summary-cards",
          "namePretty": "Checkout summary cards",
          "filename": "checkout-summary-cards",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/checkout-summary-cards.html",
          "localPath": "patterns/cards/checkout-summary-cards.html",
          "readme": {}
        },
        {
          "name": "intro-cards-discount",
          "namePretty": "Intro cards discount",
          "filename": "intro-cards-discount",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/intro-cards-discount.html",
          "localPath": "patterns/cards/intro-cards-discount.html",
          "readme": {}
        },
        {
          "name": "intro-cards",
          "namePretty": "Intro cards",
          "filename": "intro-cards",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/intro-cards.html",
          "localPath": "patterns/cards/intro-cards.html",
          "readme": {}
        },
        {
          "name": "intro-category-cards",
          "namePretty": "Intro category cards",
          "filename": "intro-category-cards",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/intro-category-cards.html",
          "localPath": "patterns/cards/intro-category-cards.html",
          "readme": {}
        },
        {
          "name": "photo-arrays",
          "namePretty": "Photo arrays",
          "filename": "photo-arrays",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/photo-arrays.html",
          "localPath": "patterns/cards/photo-arrays.html",
          "readme": {}
        },
        {
          "name": "price-overview-card",
          "namePretty": "Price overview card",
          "filename": "price-overview-card",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/price-overview-card.html",
          "localPath": "patterns/cards/price-overview-card.html",
          "readme": {}
        },
        {
          "name": "product-details-card",
          "namePretty": "Product details card",
          "filename": "product-details-card",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/product-details-card.html",
          "localPath": "patterns/cards/product-details-card.html",
          "readme": {}
        },
        {
          "name": "review-header",
          "namePretty": "Review header",
          "filename": "review-header",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/review-header.html",
          "localPath": "patterns/cards/review-header.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "filename": "cards",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "checkboxes",
          "namePretty": "Checkboxes",
          "filename": "checkboxes",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/checkboxes.html",
          "localPath": "patterns/forms/checkboxes.html",
          "readme": {}
        },
        {
          "name": "coupon",
          "namePretty": "Coupon",
          "filename": "coupon",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/coupon.html",
          "localPath": "patterns/forms/coupon.html",
          "readme": {}
        },
        {
          "name": "date-picker",
          "namePretty": "Date picker",
          "filename": "date-picker",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/date-picker.html",
          "localPath": "patterns/forms/date-picker.html",
          "readme": {}
        },
        {
          "name": "emails-on-dark",
          "namePretty": "Emails on dark",
          "filename": "emails-on-dark",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/emails-on-dark.html",
          "localPath": "patterns/forms/emails-on-dark.html",
          "readme": {
            "backgroundColor": "#332a2d",
            "backgroundColour": "#332a2d",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        },
        {
          "name": "emails",
          "namePretty": "Emails",
          "filename": "emails",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/emails.html",
          "localPath": "patterns/forms/emails.html",
          "readme": {}
        },
        {
          "name": "errors",
          "namePretty": "Errors",
          "filename": "errors",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/errors.html",
          "localPath": "patterns/forms/errors.html",
          "readme": {}
        },
        {
          "name": "legend",
          "namePretty": "Legend",
          "filename": "legend",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/legend.html",
          "localPath": "patterns/forms/legend.html",
          "readme": {}
        },
        {
          "name": "number",
          "namePretty": "Number",
          "filename": "number",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/number.html",
          "localPath": "patterns/forms/number.html",
          "readme": {}
        },
        {
          "name": "password",
          "namePretty": "Password",
          "filename": "password",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/password.html",
          "localPath": "patterns/forms/password.html",
          "readme": {}
        },
        {
          "name": "radio-buttons-img",
          "namePretty": "Radio buttons img",
          "filename": "radio-buttons-img",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/radio-buttons-img.html",
          "localPath": "patterns/forms/radio-buttons-img.html"
        },
        {
          "name": "radio-buttons",
          "namePretty": "Radio buttons",
          "filename": "radio-buttons",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/radio-buttons.html",
          "localPath": "patterns/forms/radio-buttons.html",
          "readme": {}
        },
        {
          "name": "search",
          "namePretty": "Search",
          "filename": "search",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/search.html",
          "localPath": "patterns/forms/search.html",
          "readme": {}
        },
        {
          "name": "select-province",
          "namePretty": "Select province",
          "filename": "select-province",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/select-province.html",
          "localPath": "patterns/forms/select-province.html"
        },
        {
          "name": "select",
          "namePretty": "Select",
          "filename": "select",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/select.html",
          "localPath": "patterns/forms/select.html",
          "readme": {}
        },
        {
          "name": "text-areas",
          "namePretty": "Text areas",
          "filename": "text-areas",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/text-areas.html",
          "localPath": "patterns/forms/text-areas.html",
          "readme": {}
        },
        {
          "name": "text-inputs",
          "namePretty": "Text inputs",
          "filename": "text-inputs",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/text-inputs.html",
          "localPath": "patterns/forms/text-inputs.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/README.md",
          "localPath": "patterns/forms/README.md"
        }
      ],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "filename": "forms",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        }
      ]
    },
    {
      "name": "header-footer",
      "namePretty": "Header footer",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/header-footer",
      "html": [
        {
          "name": "footer",
          "namePretty": "Footer",
          "filename": "footer",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/header-footer/footer.html",
          "localPath": "patterns/header-footer/footer.html",
          "readme": {}
        },
        {
          "name": "header",
          "namePretty": "Header",
          "filename": "header",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/header-footer/header.html",
          "localPath": "patterns/header-footer/header.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/header-footer/README.md",
          "localPath": "patterns/header-footer/README.md"
        }
      ],
      "css": [
        {
          "name": "header",
          "namePretty": "Header",
          "filename": "header",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/header-footer/header.css",
          "localPath": "patterns/header-footer/header.css"
        }
      ]
    },
    {
      "name": "navigation",
      "namePretty": "Navigation",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation",
      "html": [
        {
          "name": "breadcrumbs",
          "namePretty": "Breadcrumbs",
          "filename": "breadcrumbs",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/breadcrumbs.html",
          "localPath": "patterns/navigation/breadcrumbs.html",
          "readme": {}
        },
        {
          "name": "checkout-section-numbers",
          "namePretty": "Checkout section numbers",
          "filename": "checkout-section-numbers",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/checkout-section-numbers.html",
          "localPath": "patterns/navigation/checkout-section-numbers.html",
          "readme": {}
        },
        {
          "name": "icon-navigation",
          "namePretty": "Icon navigation",
          "filename": "icon-navigation",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/icon-navigation.html",
          "localPath": "patterns/navigation/icon-navigation.html",
          "readme": {}
        },
        {
          "name": "nextpage",
          "namePretty": "Nextpage",
          "filename": "nextpage",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/nextpage.html",
          "localPath": "patterns/navigation/nextpage.html",
          "readme": {}
        },
        {
          "name": "previouspage",
          "namePretty": "Previouspage",
          "filename": "previouspage",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/previouspage.html",
          "localPath": "patterns/navigation/previouspage.html",
          "readme": {}
        },
        {
          "name": "social-icon-nav",
          "namePretty": "Social icon nav",
          "filename": "social-icon-nav",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/social-icon-nav.html",
          "localPath": "patterns/navigation/social-icon-nav.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/README.md",
          "localPath": "patterns/navigation/README.md"
        }
      ],
      "css": [
        {
          "name": "navigation",
          "namePretty": "Navigation",
          "filename": "navigation",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/navigation/navigation.css",
          "localPath": "patterns/navigation/navigation.css"
        }
      ]
    },
    {
      "name": "sections",
      "namePretty": "Sections",
      "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections",
      "html": [
        {
          "name": "cart-summary-header",
          "namePretty": "Cart summary header",
          "filename": "cart-summary-header",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/cart-summary-header.html",
          "localPath": "patterns/sections/cart-summary-header.html",
          "readme": {}
        },
        {
          "name": "extra-section",
          "namePretty": "Extra section",
          "filename": "extra-section",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/extra-section.html",
          "localPath": "patterns/sections/extra-section.html",
          "readme": {}
        },
        {
          "name": "rating",
          "namePretty": "Rating",
          "filename": "rating",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/rating.html",
          "localPath": "patterns/sections/rating.html",
          "readme": {}
        },
        {
          "name": "review-header",
          "namePretty": "Review header",
          "filename": "review-header",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/review-header.html",
          "localPath": "patterns/sections/review-header.html"
        },
        {
          "name": "review",
          "namePretty": "Review",
          "filename": "review",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/review.html",
          "localPath": "patterns/sections/review.html"
        },
        {
          "name": "subscribe",
          "namePretty": "Subscribe",
          "filename": "subscribe",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/subscribe.html",
          "localPath": "patterns/sections/subscribe.html",
          "readme": {
            "backgroundColor": "#332a2d",
            "backgroundColour": "#332a2d",
            "interfaceColours": {
              "primary": 255,
              "opposite": 0
            }
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "filename": "README",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/README.md",
          "localPath": "patterns/sections/README.md"
        }
      ],
      "css": [
        {
          "name": "sections",
          "namePretty": "Sections",
          "filename": "sections",
          "path": "/Users/sarahabel/Dropbox/≈Algonquin/6-2018 - GD/Web Dev 4 • DSN1678/≈COLLAB/ecommerce-pattern-library/patterns/sections/sections.css",
          "localPath": "patterns/sections/sections.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1524144272079);
}());