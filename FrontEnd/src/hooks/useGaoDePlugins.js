   
   export function useSyncPlugins(map) {
   // 创建并添加工具条
      const toolBar = new AMap.ToolBar();
      map.addControl(toolBar);

      // 创建并添加比例尺
      const scale = new AMap.Scale();
      map.addControl(scale);

      // 创建并添加鼠标工具
      const mouseTool = new AMap.MouseTool(map);
      mouseTool.mouseTool('drawPolygon'); // 示例：启用多边形绘制工具
   }

   export function usePlaceSearch(keywords) {
    // 检查 keywords 是否为空
    if (!keywords) {
        return Promise.resolve({}); // 直接返回一个空对象
    }

    return new Promise((resolve, reject) => {
        AMap.plugin('AMap.PlaceSearch', function() {
            const autoOptions = {
                city: '上海'
            };
            const placeSearch = new AMap.PlaceSearch(autoOptions);
            placeSearch.search(keywords, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    // 搜索成功，返回结果
                    resolve(result);
                } else {
                    // 搜索失败，返回错误信息
                    reject(result.info);
                }
            });
        });
    });
}
