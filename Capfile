set :user,        "www-data"
set :application, "refreshboulder"
set :deploy_to,   "/var/www/#{application}"

role :web, "192.237.210.170"

desc "Deploy Refresh Boulder"
task :deploy do
  run "cd #{deploy_to} && git pull origin master && git reset --hard HEAD"
end
