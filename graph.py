import json
import networkx as nx
from pprint import pprint

democrats = 50
republicans = 50
p_in = 0.99
p_out = 0.01

G = nx.random_partition_graph([democrats, republicans], p_in, p_out)
data = nx.node_link_data(G)

del data['graph']

filename = 'src/data/{}_{}_{}_{}.json'.format(
    democrats, republicans, p_in, p_out)

with open(filename, 'w') as f:
    json.dump(data, f)
