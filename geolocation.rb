require 'sinatra'
require "pry"
require "sinatra/reloader" if development?
require "logger"
require "pp"
enable :logger
enable :logger
enable :sessions



get '/' do
 erb :index
end