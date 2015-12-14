# mgr-gulp-angular-template

## Installation

    $ git clone https://github.com/Magora-Systems-Frontend/template.git

This template requires gulp ang bower

#### Install the plugins

    $ npm i -g gulp

    $ npm i -g bower 
    
    $ npm i
    
#### Technologies
* jade for templates
* stylus for css 


#### The application includes

* ui.router
* ui.bootstrap
* angular-loading-bar
* pascalprecht.translate
* ngResource

#### Run project

    $ gulp
    
#### Create build for production

    $ gulp build --env=production
    
    
#### Multi applications
If you need to make two applications are independent of the code, create a second folder. put into it "config.json"

    $ mkdir secondApp 
    $ copy application/config.json  secondApp/config.json
    
    $ gulp --config=secondApp
    
    
#### Stage and production 
If you need to make inquiries on the "stage" and "production" servers

    $ gulp --server=staging.my.com --protocol=http
    $ gulp --server=production.my.com --protocol=https
    
In your js code use {{SERVER}} and {{protocol}}

> defaults:
>
>    * SERVER = localhost:8090
>    
>    * protocol = http
