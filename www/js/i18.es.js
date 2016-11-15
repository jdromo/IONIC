(function() {
    angular.module('starter')
        .config(configTrans);

    configTrans.$inject = ['$translateProvider'];

    function configTrans($translateProvider) {
        $translateProvider.translations('es', {            
            "hello": "Hola"
        });
        $translateProvider.translations('en',{
            "hello": "Hello"
        });

        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
    }
})();