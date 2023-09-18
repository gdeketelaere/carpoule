const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);
  config.resolver.assetExts.push('cjs');
  config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];
  config.transformer.babelTransformerPath = require.resolve(
    'react-native-svg-transformer'
  );
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== 'svg'
  );
  config.resolver.sourceExts.push('svg');
  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg']
  };

  return config;
})();
