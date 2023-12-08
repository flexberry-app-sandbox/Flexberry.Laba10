docker build --no-cache -f SQL\Dockerfile.PostgreSql -t laba_10/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t laba_10/app ../..
