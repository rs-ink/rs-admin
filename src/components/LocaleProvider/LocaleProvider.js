/* eslint camelcase:0 */
import React from 'react';
import {IntlProvider} from 'react-intl';
// 引入 react-intl 多语言包
// import en from 'react-intl/locale-data/en';
// import zh from 'react-intl/locale-data/zh';
// 引入 locale 配置文件
import en_US from '../../locales/en-US';
import zh_CN from '../../locales/zh-CN';
import PropTypes from "prop-types"

// 设置语言包
// addLocaleData([...en, ...zh]);

const localeInfo = {
    'zh-CN': {
        appLocale: 'zh',
        appMessages: zh_CN,
    },
    'en-US': {
        appLocale: 'en',
        appMessages: en_US,
    },
};

function LocaleProvider({locale, children}) {
    const myLocale = localeInfo[locale]
        ? localeInfo[locale]
        : localeInfo['en-US'];

    return (
        <IntlProvider locale={myLocale.appLocale} messages={myLocale.appMessages}>
            {React.Children.only(children)}
        </IntlProvider>
    );
}

LocaleProvider.propTypes = {
    locale: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
};
export default LocaleProvider
