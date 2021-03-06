# Routes

{% api-method method="post" host="https://api.cakes.com" path="/posts" %}
{% api-method-summary %}
Get Workouts
{% endapi-method-summary %}

{% api-method-description %}
you can add workouts to db
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
add token to header
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="description" type="string" required=true %}
what it does and how you do it
{% endapi-method-parameter %}

{% api-method-parameter name="bodyPart" type="string" required=true %}
what body part it works out
{% endapi-method-parameter %}

{% api-method-parameter name="Name" type="string" required=true %}
name of workout
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```text
{    "name": "workout name",    "bodyPart": "body part",    "description ": "description of what it does"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```text
{    "message": "error."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.cakes.com" path="/posts" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}
shows what workouts are in db
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="token" type="string" required=true %}
token needed
{% endapi-method-parameter %}
{% endapi-method-headers %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
"name": "name",
"bodyPart": "body part",
"description": "description of what workout does"
}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=302 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{"message: error"}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="patch" host="https://api.cakes.com" path="/posts/:postId" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}
can update wokrout when given specified param
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
add token to header
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-body-parameters %}
{% api-method-parameter name="description" type="string" required=false %}
what it does and how you do it
{% endapi-method-parameter %}

{% api-method-parameter name="bodyPart" type="string" required=false %}
what body part it works out
{% endapi-method-parameter %}

{% api-method-parameter name="Name" type="string" required=false %}
name of workout
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api.cakes.com" path="/posts/:postId" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}
gets a specific idea when given the postId
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
add token to header
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="postId" type="string" required=true %}
id from specific workout thats being searched
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="delete" host="https://api.cakes.com" path="/posts/:postId" %}
{% api-method-summary %}

{% endapi-method-summary %}

{% api-method-description %}
delete specific workout from the database
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-headers %}
{% api-method-parameter name="Authentication" type="string" required=true %}
add token to header
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="postId" type="string" required=true %}
id from specific workout thats being searched
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

