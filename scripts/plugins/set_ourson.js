export function set_ourson(db) {
    var myRecord;
    // ouvre un transaction en mode lecture/écriture pour effectuer la suppression
    var transaction = db.transaction(["keyvaluepairs"], "readwrite");

    // affiche le succès de la transaction.
    transaction.oncomplete = function() {
        window.dispatchEvent(new Event('blob_ready'));
    };

    // affiche la cause de l’échec de la transaction.
    transaction.onerror = function() {};

    // ouvre un accès au magasin d'objet toDoList
    var objectStore = transaction.objectStore("keyvaluepairs");

    // Retrouve l'enregistrement dont la clé est snapshot
    var objectStoreRequest = objectStore.get("snapshot");

    objectStoreRequest.onsuccess = function(e) {
        //affecte la valeur de l'enregistrement à la div de stockage
        document.getElementById('my_blob').src = objectStoreRequest.result;
    };
};
