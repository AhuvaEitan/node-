const TasksController={
    getList:(req,res)=>{
        res.send([
            {id:1,name:"task 1",status:"TODO"},
            {id:2,name:"task 2",status:"Done"}
        ])
    },
    getById:(req,res)=>{
        res.send(`get task by id ${req.params.id }`);
    },
    add:(req,res)=>{
        res.send("add a new task");
    },
    update:(req,res)=>{
        res.send("update a task");
    },
    delete:(req,res)=>{
        res.send("delete agt task");
    }

}

export default TasksController;


[
    {
      "cursor": "rvMqy8zRzbkya2QyNjl2Ym1lc2M5MDAw",
      "service": {
        "id": "srv-cgul2kd269vbmesc9000",
        "autoDeploy": "yes",
        "branch": "master",
        "buildFilter": null,
        "createdAt": "2023-04-17T14:02:04.459338Z",
        "name": "ToDoApi",
        "notifyOnFail": "default",
        "ownerId": "usr-cgts0hd269vbmevip1j0",
        "repo": "https://github.com/AhuvaEitan/TodoServer",
        "rootDir": "",
        "slug": "todoapi-hmyp",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-04-17T14:16:41.027559Z",
        "serviceDetails": {
          "disk": null,
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "./Dockerfile"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todoapi-hmyp.onrender.com"
        }
      }
    },
    {
      "cursor": "rvMqy8zRzbkxbW8ycXYyZmRlZWlmYTgw",
      "service": {
        "id": "srv-cgul1mo2qv2fdeeifa80",
        "autoDeploy": "yes",
        "branch": "master",
        "buildFilter": null,
        "createdAt": "2023-04-17T14:00:06.350675Z",
        "name": "TodoApi",
        "notifyOnFail": "default",
        "ownerId": "usr-cgts0hd269vbmevip1j0",
        "repo": "https://github.com/AhuvaEitan/TodoServer",
        "rootDir": "",
        "slug": "todoapi-2pka",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-04-17T14:00:09.112729Z",
        "serviceDetails": {
          "disk": null,
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "./DockerFile"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todoapi-2pka.onrender.com"
        }
      }
    },
    {
      "cursor": "rvMqy8zRzbkwbTgycXYyZmRlZWlhMHIw",
      "service": {
        "id": "srv-cgul0m82qv2fdeeia0r0",
        "autoDeploy": "yes",
        "branch": "master",
        "buildFilter": null,
        "createdAt": "2023-04-17T13:57:55.874728Z",
        "name": "TodoServer",
        "notifyOnFail": "default",
        "ownerId": "usr-cgts0hd269vbmevip1j0",
        "repo": "https://github.com/AhuvaEitan/TodoServer",
        "rootDir": "",
        "slug": "todoserver-n1pv",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-04-17T13:57:59.786139Z",
        "serviceDetails": {
          "disk": null,
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "./Todoserver/DockerFile"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todoserver-n1pv.onrender.com"
        }
      }
    },
    {
      "cursor": "WTM261tfHTJraW8ycXYyZmRlYjVzZWkw",
      "service": {
        "id": "srv-cgu1kio2qv2fdeb5sei0",
        "autoDeploy": "yes",
        "branch": "master",
        "buildFilter": null,
        "createdAt": "2023-04-16T15:55:01.95671Z",
        "name": "ToDoClient",
        "notifyOnFail": "default",
        "ownerId": "usr-cgts0hd269vbmevip1j0",
        "repo": "https://github.com/AhuvaEitan/ToDoClient",
        "rootDir": "",
        "slug": "todoclient-r060",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2023-04-17T14:16:13.559365Z",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "parentServer": null,
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todoclient-r060.onrender.com"
        }
      }
    },
    {
      "cursor": "rOADSUDovLMxaDJ1dDRtY2ZybmRrMDhn",
      "service": {
        "id": "srv-cgtu1h2ut4mcfrndk08g",
        "autoDeploy": "yes",
        "branch": "master",
        "buildFilter": null,
        "createdAt": "2023-04-16T11:49:35.316145Z",
        "name": "TodoClient",
        "notifyOnFail": "default",
        "ownerId": "usr-cgts0hd269vbmevip1j0",
        "repo": "https://github.com/AhuvaEitan/ToDoReact",
        "rootDir": "",
        "slug": "todoclient-pkrv",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2023-04-16T14:33:50.661994Z",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "parentServer": null,
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todoclient-pkrv.onrender.com"
        }
      }
    },
    {
      "cursor": "l8ZJUjB-tPJoZmcycXYyZmRlYWMxZmpn",
      "service": {
        "id": "srv-cgtthfg2qv2fdeac1fjg",
        "autoDeploy": "yes",
        "branch": "master",
        "buildFilter": null,
        "createdAt": "2023-04-16T11:15:21.631717Z",
        "name": "TodoReact",
        "notifyOnFail": "default",
        "ownerId": "usr-cgts0hd269vbmevip1j0",
        "repo": "https://github.com/AhuvaEitan/ToDoReact",
        "rootDir": "",
        "slug": "todoreact-tk0m",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2023-04-16T11:15:21.639813Z",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "parentServer": null,
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todoreact-tk0m.onrender.com"
        }
      }
    }
  ]