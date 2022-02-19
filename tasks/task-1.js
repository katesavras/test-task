function CreateSecretHolder(secret) {
    this.secret = secret
}

CreateSecretHolder.prototype.getSecret = function () {
    return this.secret
}

CreateSecretHolder.prototype.setSecret = function (newSecret) {
    this.secret = newSecret
}

const obj = new CreateSecretHolder(5)
console.log(obj.getSecret())
obj.setSecret(2)
console.log(obj.getSecret())
