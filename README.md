---
description: routes
---

# authentification

{% api-method method="post" host="https://api.cakes.com" path="/api/user/register" %}
{% api-method-summary %}
workouts
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allow you to add workouts to the api
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="password" type="string" required=true %}
minimum of 6 characters
{% endapi-method-parameter %}

{% api-method-parameter name="email" type="string" required=true %}
minimum of 6 characters
{% endapi-method-parameter %}

{% api-method-parameter name="name" type="string" required=true %}
minimum of 6 characters
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```text
{    "name": "name",    "email": "name@email.com",    "password": "password"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```text
{    "message": "error"}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="post" host="https://api.cakes.com" path="/api/user/login" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}

{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="email" type="string" required=true %}
same email used to register
{% endapi-method-parameter %}

{% api-method-parameter name="password" type="string" required=true %}
same password used to register
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
Logged in!
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=400 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
access denied
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

