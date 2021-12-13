let driver = {}

function updateDriverWithKeyAndValue({}, k, v) {
    let new_obj = {}
    new_obj[k] = v
    return Object.assign({}, new_obj, driver)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, k, v) {
    let new_obj = {}
    new_obj[k] = v
    return Object.assign(driver, new_obj)
}

function deleteFromDriverByKey(driver, k) {
    let newObj = Object.assign({}, driver)
    delete newObj[k];
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, k) {
    delete driver[k]
    return driver
}