const base = {
    get() {
                return {
            url : "http://localhost:8080/gouwuwagnzhan/",
            name: "gouwuwagnzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gouwuwagnzhan/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "购物网站"
        } 
    }
}
export default base
