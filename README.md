Pre-Requisite Skills
-------------------------------------
    Microservices
    Docker  -   Containerization

Kubernetes
--------------------------------------------
    is an orchastration platform

    orchastration is a microservices design pattern,
        where a single object called orchastrator
            will take the resposnibilty of organzing req and resps
                and will coordinate with the underlying systems/services.

    K8s is the orchastrator.

    Google developed open-source platform @ 2014

    Docker provide containers, K8s will orchastrate the containers; k8s can
    orchastrate other containers as well.    

    Case Study 
        
        DB Contaienr  <------------>  App Container     <-------> End User
         NoSQL                        Server-Side JS                   rest client
                                        rest-api

    Lab Setup on windows 10
        docker-desktop
        minikube                (k3s,kind...etc)
        kubecli

Kubernetes resources / tools
------------------------------------------------------------
    Node        is a physical or virtual machine that hosts the kubernetes
    Clustur     is a network group of nodes.
    Pod         is an abstraction of a container. A container runs inside a Pod.
                each pod has a private ip and port.
                and these ips and ports are dynamically assigned.
                in the event of restart of a pod, the ip and port assigned to 
                it are not going to be the same as previous
    Service     is a layer on the pod that offers an stable ip/port .
                services can be private and public as well.

Kubernetes Archetecture
-----------------------------------------------------------

                        |- Slave Node1 - [Pod1{containerA},Pod2{containerB}.....,Service1,Service2]
    Master      --------|- Slave Node2 - [Pod1,Pod2.....,Service1,Service2]
                        |- Slave Node3 - [Pod1,Pod2.....,Service1,Service2]

    Master (Control Plane)
        API Server                  works like a gateway    (receive commands from kubecli..etc)
        Schedular                   manages the pods and other k8s resources as instructed by controller Manager
        Controller Manager          assist the api-server in executing the commands given.
        etcd                        manges the network layers.

    Slave Node (Worker Node)
        kubelet
        kub-proxy
        pods
        services
        and other k8s resources
    




