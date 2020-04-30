window.servers = {
    rows: {
        available: [],
        current: "production",
        rows: {
            production: {
                url: "/data/production/",
                name: "Production Server",
                status: "enabled"
            },
            staging: {
                url: "/data/staging/",
                name: "Staging Server",
                status: "enabled"
            },
            dev: {
                url: "/data/staging/",
                name: "Staging Server",
                status: "disabled"
            }
        },
        getRow: function (whereKey = '') {

        },
        updateRow: function (object) {

        },
        deleteRow: function (whereKey = '') {

        }
    },
    getAvailableServers: function () {
        var ans = Object.values(window.servers.rows.rows);
        var ans2 = Object.keys(window.servers.rows.rows);
        var result = ans.map(({ status }) => status);
       
        for (var i = 0; i < ans2.length; i++){
            if (result[i] === "enabled"){
                window.servers.rows.available.push(ans2[i]);
            }
        }
        var z = window.servers.rows.available;
        return z;   
    }
}
    
    


