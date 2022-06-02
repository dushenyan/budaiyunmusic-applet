import request from '../../utils/request.js'
Page({
  data: {
    bannerdata: {},
    personalized: {},
    regelist: {},
  },
  onLoad: async function (options) {
    let res = await new request('/banner', {
      type: 2
    });
    let pers = await new request('/personalized', {
      limit: 30
    })
    let index = 0;
    let resultArr = [];
    while (index < 16) {
      let topListArr = await new request("/top/list", {
        idx: index++
      })
      let topListItem = {
        name: topListArr.playlist.name,
        track: topListArr.playlist.tracks.slice(0, 5)
      }
      resultArr.push(topListItem);
    }
    this.setData({
      bannerdata: res.banners,
      personalized: pers.result,
      regelist: resultArr
    })
  }
})