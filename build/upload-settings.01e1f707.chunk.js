"use strict";
(self["webpackChunkhilltop_backend"] = self["webpackChunkhilltop_backend"] || []).push([[695],{

/***/ 56752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SettingsPage: () => (/* binding */ SettingsPage),
  "default": () => (/* binding */ pages_SettingsPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Main/Main.js
var Main = __webpack_require__(185);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js + 2 modules
var HeaderLayout = __webpack_require__(53979);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Button/Button.js
var Button = __webpack_require__(29728);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/ContentLayout.js
var ContentLayout = __webpack_require__(49066);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Layout/Layout.js
var Layout = __webpack_require__(17034);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/Grid.js
var Grid = __webpack_require__(11276);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Grid/GridItem.js
var GridItem = __webpack_require__(67819);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/ToggleInput/ToggleInput.js
var ToggleInput = __webpack_require__(93127);
// EXTERNAL MODULE: ./node_modules/@strapi/helper-plugin/build/helper-plugin.esm.js + 23 modules
var helper_plugin_esm = __webpack_require__(57993);
// EXTERNAL MODULE: ./node_modules/@strapi/icons/dist/Check.js
var Check = __webpack_require__(85018);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 40 modules
var axios = __webpack_require__(52861);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(64593);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/constants.js
var constants = __webpack_require__(11727);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-upload/admin/src/utils/index.js + 9 modules
var utils = __webpack_require__(63955);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/init.js
const init = (initialState) => {
  return initialState;
};
/* harmony default export */ const SettingsPage_init = (init);

// EXTERNAL MODULE: ./node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(18172);
// EXTERNAL MODULE: ./node_modules/lodash/set.js
var set = __webpack_require__(36968);
var set_default = /*#__PURE__*/__webpack_require__.n(set);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/reducer.js


const initialState = {
  isLoading: true,
  isSubmiting: false,
  initialData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  },
  modifiedData: {
    responsiveDimensions: true,
    sizeOptimization: true,
    autoOrientation: false,
    videoPreview: false
  }
};
const reducer = (state, action) => (
  // eslint-disable-next-line consistent-return
  (0,immer_esm/* default */.ZP)(state, (drafState) => {
    switch (action.type) {
      case "CANCEL_CHANGES": {
        drafState.modifiedData = state.initialData;
        break;
      }
      case "GET_DATA_SUCCEEDED": {
        drafState.isLoading = false;
        drafState.initialData = action.data;
        drafState.modifiedData = action.data;
        break;
      }
      case "ON_CHANGE": {
        set_default()(drafState, ["modifiedData", ...action.keys.split(".")], action.value);
        break;
      }
      case "ON_SUBMIT": {
        drafState.isSubmiting = true;
        break;
      }
      case "SUBMIT_SUCCEEDED": {
        drafState.initialData = state.modifiedData;
        drafState.isSubmiting = false;
        break;
      }
      case "ON_SUBMIT_ERROR": {
        drafState.isSubmiting = false;
        break;
      }
      default:
        return state;
    }
  })
);
/* harmony default export */ const SettingsPage_reducer = (reducer);


;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-upload/admin/src/pages/SettingsPage/index.js












const SettingsPage = () => {
  const { formatMessage } = (0,useIntl/* default */.Z)();
  const { lockApp, unlockApp } = (0,helper_plugin_esm/* useOverlayBlocker */.o1)();
  const toggleNotification = (0,helper_plugin_esm/* useNotification */.lm)();
  const { get, put } = (0,helper_plugin_esm/* useFetchClient */.kY)();
  (0,helper_plugin_esm/* useFocusWhenNavigate */.go)();
  const [{ initialData, isLoading, isSubmiting, modifiedData }, dispatch] = (0,react.useReducer)(
    SettingsPage_reducer,
    initialState,
    SettingsPage_init
  );
  const isMounted = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    const CancelToken = axios["default"].CancelToken;
    const source = CancelToken.source();
    const getData = async () => {
      try {
        const {
          data: { data }
        } = await get("/upload/settings", {
          cancelToken: source.token
        });
        dispatch({
          type: "GET_DATA_SUCCEEDED",
          data
        });
      } catch (err) {
        console.error(err);
      }
    };
    if (isMounted.current) {
      getData();
    }
    return () => {
      source.cancel("Operation canceled by the user.");
      isMounted.current = false;
    };
  }, []);
  const isSaveButtonDisabled = isEqual_default()(initialData, modifiedData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSaveButtonDisabled) {
      return;
    }
    lockApp();
    dispatch({ type: "ON_SUBMIT" });
    try {
      await put("/upload/settings", modifiedData);
      dispatch({
        type: "SUBMIT_SUCCEEDED"
      });
      toggleNotification({
        type: "success",
        message: { id: "notification.form.success.fields" }
      });
    } catch (err) {
      console.error(err);
      dispatch({ type: "ON_SUBMIT_ERROR" });
    }
    unlockApp();
  };
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "ON_CHANGE",
      keys: name,
      value
    });
  };
  return /* @__PURE__ */ react.createElement(Main/* Main */.o, { tabIndex: -1 }, /* @__PURE__ */ react.createElement(
    Helmet/* Helmet */.q,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("page.title"),
        defaultMessage: "Settings - Media Libray"
      })
    }
  ), /* @__PURE__ */ react.createElement("form", { onSubmit: handleSubmit }, /* @__PURE__ */ react.createElement(
    HeaderLayout/* HeaderLayout */.T,
    {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.header.label"),
        defaultMessage: "Media Library"
      }),
      primaryAction: /* @__PURE__ */ react.createElement(
        Button/* Button */.z,
        {
          disabled: isSaveButtonDisabled,
          "data-testid": "save-button",
          loading: isSubmiting,
          type: "submit",
          startIcon: /* @__PURE__ */ react.createElement(Check/* default */.Z, null),
          size: "S"
        },
        formatMessage({
          id: "global.save",
          defaultMessage: "Save"
        })
      ),
      subtitle: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.sub-header.label"),
        defaultMessage: "Configure the settings for the Media Library"
      })
    }
  ), /* @__PURE__ */ react.createElement(ContentLayout/* ContentLayout */.D, null, isLoading ? /* @__PURE__ */ react.createElement(helper_plugin_esm/* LoadingIndicatorPage */.dO, null) : /* @__PURE__ */ react.createElement(Layout/* Layout */.A, null, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 12 }, /* @__PURE__ */ react.createElement(Box/* Box */.x, { background: "neutral0", padding: 6, shadow: "filterShadow", hasRadius: true }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, { direction: "column", alignItems: "stretch", gap: 4 }, /* @__PURE__ */ react.createElement(Flex/* Flex */.k, null, /* @__PURE__ */ react.createElement(Typography/* Typography */.Z, { variant: "delta", as: "h2" }, formatMessage({
    id: (0,utils/* getTrad */.OB)("settings.blockTitle"),
    defaultMessage: "Asset management"
  }))), /* @__PURE__ */ react.createElement(Grid/* Grid */.r, { gap: 6 }, /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "responsiveDimensions",
      "data-testid": "responsiveDimensions",
      checked: modifiedData.responsiveDimensions,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.description"),
        defaultMessage: "Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.responsiveDimensions.label"),
        defaultMessage: "Responsive friendly upload"
      }),
      name: "responsiveDimensions",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "responsiveDimensions", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "sizeOptimization",
      "data-testid": "sizeOptimization",
      checked: modifiedData.sizeOptimization,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.description"),
        defaultMessage: "Enabling this option will reduce the image size and slightly reduce its quality."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.sizeOptimization.label"),
        defaultMessage: "Size optimization"
      }),
      name: "sizeOptimization",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "sizeOptimization", value: e.target.checked }
        });
      }
    }
  )), /* @__PURE__ */ react.createElement(GridItem/* GridItem */.P, { col: 6, s: 12 }, /* @__PURE__ */ react.createElement(
    ToggleInput/* ToggleInput */.s,
    {
      "aria-label": "autoOrientation",
      "data-testid": "autoOrientation",
      checked: modifiedData.autoOrientation,
      hint: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.description"),
        defaultMessage: "Enabling this option will automatically rotate the image according to EXIF orientation tag."
      }),
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("settings.form.autoOrientation.label"),
        defaultMessage: "Auto orientation"
      }),
      name: "autoOrientation",
      offLabel: formatMessage({
        id: "app.components.ToggleCheckbox.off-label",
        defaultMessage: "Off"
      }),
      onLabel: formatMessage({
        id: "app.components.ToggleCheckbox.on-label",
        defaultMessage: "On"
      }),
      onChange: (e) => {
        handleChange({
          target: { name: "autoOrientation", value: e.target.checked }
        });
      }
    }
  ))))))))));
};
const ProtectedSettingsPage = () => /* @__PURE__ */ react.createElement(helper_plugin_esm/* CheckPagePermissions */.O4, { permissions: constants/* PERMISSIONS */._I.settings }, /* @__PURE__ */ react.createElement(SettingsPage, null));
/* harmony default export */ const pages_SettingsPage = (ProtectedSettingsPage);


/***/ }),

/***/ 49066:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41580);


const d = ({ children: t }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Box_Box_js__WEBPACK_IMPORTED_MODULE_1__/* .Box */ .x, { paddingLeft: 10, paddingRight: 10, children: t });



/***/ }),

/***/ 53979:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  T: () => (/* binding */ HeaderLayout_b)
});

// UNUSED EXPORTS: BaseHeaderLayout

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 4 modules
var styled_components_browser_esm = __webpack_require__(88972);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useElementOnScreen.js

const b = (t) => {
  const e = (0,react.useRef)(null), [s, c] = (0,react.useState)(!0), i = ([n]) => {
    c(n.isIntersecting);
  };
  return (0,react.useEffect)(() => {
    const n = e.current, r = new IntersectionObserver(i, t);
    return n && r.observe(e.current), () => {
      n && r.disconnect();
    };
  }, [e, t]), [e, s];
};


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var dist = __webpack_require__(79698);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/hooks/useResizeObserver.js


const c = (e, i) => {
  const t = (0,dist/* useCallbackRef */.W)(i);
  (0,react.useLayoutEffect)(() => {
    const r = new ResizeObserver(t);
    return Array.isArray(e) ? e.forEach((n) => {
      n.current && r.observe(n.current);
    }) : e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e, t]);
};


// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Box/Box.js
var Box = __webpack_require__(41580);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Flex/Flex.js
var Flex = __webpack_require__(11047);
// EXTERNAL MODULE: ./node_modules/@strapi/design-system/dist/Typography/Typography.js + 2 modules
var Typography = __webpack_require__(75515);
;// CONCATENATED MODULE: ./node_modules/@strapi/design-system/dist/Layout/HeaderLayout.js








const HeaderLayout_b = (r) => {
  const t = (0,react.useRef)(null), [i, d] = (0,react.useState)(null), [a, h] = b({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return c(a, () => {
    a.current && d(a.current.getBoundingClientRect());
  }), (0,react.useEffect)(() => {
    t.current && d(t.current.getBoundingClientRect());
  }, [t]), (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("div", { style: { height: i?.height }, ref: a, children: h && (0,jsx_runtime.jsx)(p, { ref: t, ...r }) }), !h && (0,jsx_runtime.jsx)(p, { ...r, sticky: !0, width: i?.width })] });
};
HeaderLayout_b.displayName = "HeaderLayout";
const C = (0,styled_components_browser_esm/* default */.ZP)((0,Box/* Box */.x))`
  width: ${({ width: r }) => r ? `${r / 16}rem` : void 0};
  z-index: ${({ theme: r }) => r.zIndices[1]};
`, p = react.forwardRef(({ navigationAction: r, primaryAction: t, secondaryAction: i, subtitle: d, title: a, sticky: h, width: c, ...s }, g) => {
  const f = typeof d == "string";
  return h ? (0,jsx_runtime.jsx)(C, { paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, position: "fixed", top: 0, right: 0, background: "neutral0", shadow: "tableShadow", width: c, "data-strapi-header-sticky": !0, children: (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { children: [r && (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingRight: 3, children: r }), (0,jsx_runtime.jsxs)(Box/* Box */.x, { children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "beta", as: "h1", ...s, children: a }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "pi", textColor: "neutral600", children: d }) : d] }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), (0,jsx_runtime.jsx)(Flex/* Flex */.k, { children: t ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 2, children: t }) : void 0 })] }) }) : (0,jsx_runtime.jsxs)(Box/* Box */.x, { ref: g, paddingLeft: 10, paddingRight: 10, paddingBottom: 8, paddingTop: r ? 6 : 8, background: "neutral100", "data-strapi-header": !0, children: [r ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingBottom: 2, children: r }) : null, (0,jsx_runtime.jsxs)(Flex/* Flex */.k, { justifyContent: "space-between", children: [(0,jsx_runtime.jsxs)(Flex/* Flex */.k, { minWidth: 0, children: [(0,jsx_runtime.jsx)(Typography/* Typography */.Z, { as: "h1", variant: "alpha", ...s, children: a }), i ? (0,jsx_runtime.jsx)(Box/* Box */.x, { paddingLeft: 4, children: i }) : null] }), t] }), f ? (0,jsx_runtime.jsx)(Typography/* Typography */.Z, { variant: "epsilon", textColor: "neutral600", as: "p", children: d }) : d] });
});



/***/ }),

/***/ 17034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88972);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const d = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  display: grid;
  grid-template-columns: ${({ hasSideNav: o }) => o ? "auto 1fr" : "1fr"};
`, m = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  overflow-x: hidden;
`, f = ({ sideNav: o, children: e }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(d, { hasSideNav: !!o, children: [o, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(m, { paddingBottom: 10, children: e })] });



/***/ }),

/***/ 185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88972);
/* harmony import */ var _Box_Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41580);



const a = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)((0,_Box_Box_js__WEBPACK_IMPORTED_MODULE_2__/* .Box */ .x))`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`, m = ({ labelledBy: o = "main-content-title", ...n }) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(a, { "aria-labelledby": o, as: "main", id: "main-content", tabIndex: -1, ...n });



/***/ })

}]);