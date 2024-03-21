if ($response.statusCode == 200) {
    var body = $response.body;
    var obj = JSON.parse(body);

    // Модификация значений в объекте subscription
    obj.user.subscription = {
        "is_lifetime": true,
        "checkin_credits": 1000,
        "is_trial": false,
        "google_subscription_status": null,
        "is_full": true,
        "expiration": null,
        "activations": 1
    };

    body = JSON.stringify(obj);
    $done({body});
} else {
    $done({});
}
