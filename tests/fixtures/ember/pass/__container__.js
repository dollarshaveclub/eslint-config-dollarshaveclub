import { test } from 'qunit'
import { set } from 'ember'

test('something', function setSomething (assert) {
  const features = this.application.__container__.lookup('service:features')
  set(features, 'something', false)
})
