angular.module('starter').factory('dbService', ['$q', dbService]);

function dbService($q) {  
    var _items;

    return {
        addItem: addItem,
        getAll: getAll,
        updateitem: updateitem,
        deleteitem: deleteitem
    };

   function addItem(item) {  
       item._id = new Date().toISOString();
       return $q.when(_db.put(item));
    };

    function updateitem(item) {  
        return $q.when(_db.put(item));
    };

    function deleteitem(item) {  
        return $q.when(_db.remove(item._id, item._rev));
    };

    function getAll(type) {  
        if (_items) 
            _items=[];
            return $q.when(_db.allDocs({ include_docs: true}))
                .then(function(docs) {
                    _items = docs.rows.map(function(row) {
                        row.doc.Date = new Date(row.doc.Date);
                        if(row.doc.docType === type){
                            return row.doc;
                        }
                    });
                    _items.clean(undefined);
                    return _items;
                });
    };
}