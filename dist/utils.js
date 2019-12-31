"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseConfig = (config, keys, values) => {
    if (!config)
        config = {};
    keys.forEach((key, i) => {
        if (typeof config[key] !== 'undefined')
            return;
        config[key] = values[i];
    });
    return config;
};
exports.parseRules = (configs) => {
    const { serverOptions, clientConfig, authenticationConfig } = configs, rules = [], ruleKeys = ['enforce_equal_versions', 'store_messages', 'sends_user_object'], ruleValues = [!!clientConfig.enforceEqualVersions, !!serverOptions.storeMessages, !!authenticationConfig.sendUserObject];
    ruleKeys.forEach((key, i) => {
        if (!ruleValues[i])
            return;
        rules.push(key);
    });
    return rules;
};
