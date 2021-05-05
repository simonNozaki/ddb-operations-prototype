#/bin/bash

aws dynamodb update-item \
  --profile e2e \
  --table-name test-application-properties \
  --key '{
      "key": {"S": "AS.MAX_RETRY"}
  }' \
  --update-expression "SET objects = :v" \
  --expression-attribute-values '{
      ":v": {"S": "5"}
  }' \
  --return-values ALL_NEW

status=$?

if [ $status = 0 ]; then
    echo 'プロパティを更新'
fi