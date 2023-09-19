import datetime
def calculateDaysBetweenDates(begin, end):
  begin = datetime.datetime.strptime(begin, "%Y-%m-%d")
  end = datetime.datetime.strptime(end, "%Y-%m-%d")
  return (end - begin).days
def getDateFromTimestamp(timestamp):
  timestamp = int(timestamp)
  date = datetime.datetime.fromtimestamp(timestamp)
  return date.strftime("%Y-%m-%d %H:%M:%S")

begin_date = "2023-09-15"
end_date = "2023-09-19"
timestamp = 1632048183

days_between = calculateDaysBetweenDates(begin_date, end_date)
formatted_date = getDateFromTimestamp(timestamp)

print("Days between dates:", days_between)
print("Formatted date:", formatted_date)
