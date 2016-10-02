from flask import Flask, request, jsonify
from crossdomain import crossdomain
import requests
import json
import os
from os.path import join, dirname
from watson_developer_cloud import TradeoffAnalyticsV1

appserver = Flask(__name__)

@appserver.route("/")
@crossdomain(origin='*')
def home():
    tradeoff_analytics = TradeoffAnalyticsV1(
        username='af7839e5-5719-4357-9f2f-8b4607ba84d5',
        password='IY2KB0panLuF')

    analytics = request.args.get("analytics")
    return "Test Test Test"

    with open(join(dirname(__file__), 'userAnalyticsPy03.json')) as data_file:
        problem_data = json.load(data_file)
    # print(json.dumps(tradeoff_analytics.dilemmas(problem_data), indent=2))
    resolution = tradeoff_analytics.dilemmas(problem_data)
    solutionNum = 0
    while resolution["resolution"]["solutions"][solutionNum]["status"]!="FRONT":
        solutionNum = solutionNum+1
    firstChoice = resolution["resolution"]["solutions"][solutionNum]["solution_ref"]
    index = int(firstChoice)-1
    module = resolution["problem"]["options"][index]["name"]
    initial = "We recomend that you practice the "
    return module+initial

    '''moduleReccomend = {
        "success": reccomend,
    }
    return jsonify(**moduleReccomend)'''


if __name__ == "__main__":
	appserver.run()
