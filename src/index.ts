import { IApi } from 'umi';

export default (api: IApi) => {
  api.describe({
    key: 'runtimeImport',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
    enableBy: api.EnableBy.config
  });
  api.modifyConfig((memo)=>{
    console.log('test runtimeImpoddrtd');
    memo.favicons = api.userConfig.changeFavicon;
    return memo;
  });
};