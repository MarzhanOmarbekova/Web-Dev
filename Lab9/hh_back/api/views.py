from django.http import JsonResponse

from .serializers import CompanySerializer, VacancySerializer
from .models import Company, Vacancy

# Create your views here.

# a.	/api/companies - List of all Companies
def company_list(request):
    companies  = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)

# b.	/api/companies/<int:id>/ - Get one Company
def company_detail(request, id):
    try:
        company =  Company.objects.get(pk = id)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data, safe=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

# c.	/api/companies/<int:id>/vacancies/ - List of Vacancies by Company
def  company_vacancies(request, id):
    try:
        company =  Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error':str(e)}, status=404)

    vacancies = company.vacancies.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

# d.	/api/vacancies/ - List of all Vacancies
def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

# e.	/api/vacancies/<int:id>/ - Get one Vacancy
def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=404)
    serializer = VacancySerializer(vacancy)
    return JsonResponse(serializer.data, safe=False)

# f.	/api/vacancies/top_ten/ - List of top 10 vacancies sorted by decreasing salary
def top_10_vacancies(request):
    vacancies = Vacancy.objects.order_by("-salary")[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
